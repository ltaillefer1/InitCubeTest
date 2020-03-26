class Initcube {
    constructor() {
        this.camera = new CCamera();
        this.matrice = new CMatrice2(camera);
    }

    update() {
        $(document).ready(function() { // lancé quand le DOM est initialisé (prêt)	

            //à chaque fois que la valeur du slider change, on modifie la couleur de fond de la barre
            //en fonction de la valeur du slider.
            var source = new EventSource("../cgi-bin/cubeEventServer.cgi");
            source.addEventListener("matrice", function(event) {
                var obj = JSON.parse(event.data);
                document.getElementById("temp").innerHTML = obj.temp;
                //document.getElementById("matrice").innerHTML = obj.matrice;
                this.camera.setPixel(obj.matrice);
                this.matrice.update();
                this.matrice.show();
            });
        });
    }
}