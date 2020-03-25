all: cgi-bin

cubeEventServer : eventPrincipale.o
		g++ -lpthread -o cubeEventServer eventPrincipale.o
eventPrincipale.o : eventPrincipale.cpp
		g++ -lpthread -o eventPrincipale.o -c eventPrincipale.cpp -W -Wall -ansi -pedantic
clean : 
		rm -rf *.o
mrproper: clean
		rm -rf InitCubeServeur

