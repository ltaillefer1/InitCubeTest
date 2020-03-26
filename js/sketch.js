var camerA;
var matrice;

function setup() {
    createCanvas(600, 600);

    camerA = new CCamera();
    matrice = new CMatrice2(camerA);
}

function draw() {
	setTimeout(update,1000);
}

function update(){
    $(document).ready(function() { // lancé quand le DOM est initialisé (prêt)  

        //à chaque fois que la valeur du slider change, on modifie la couleur de fond de la barre
        //en fonction de la valeur du slider.
        var source = new EventSource("../cgi-bin/cubeEventServer.cgi");
        source.addEventListener("matrice", function(event) {
            var obj = JSON.parse(event.data);
            document.getElementById("temp").innerHTML = obj.temp;
            //document.getElementById("matrice").innerHTML = obj.matrice;
            test.setPixel(obj.matrice);
            matrice.update();
            matrice.show();
        });
    });
}