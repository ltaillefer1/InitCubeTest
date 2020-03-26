class CMatrice2 {
    constructor(camera) {

        this.colonne = 8;
        this.ligne = 8;
        this.tab = [];
        this.x = 10;
        this.y = 10;
        this.sqWidth = 75;
        this.camera = camera;
        this.numPixel = 0;

        for (let i = 0; i < this.colonne; i++) {
            this.tab[i] = [];
            for (let j = 0; j < this.ligne; j++) {
                this.tab[i][j] = new Square(this.x, this.y, this.sqWidth, this.camera.getPixel(numPixel));
                this.x += sqWidth + 3;
                this.numPixel++;
            }
            this.y += this.sqWidth + 3;
            this.x = 10;
        }
        this.numPixel = 0;
    }

    show() {
        for (let i = 0; i < this.colonne; i++) {
            for (let j = 0; j < this.ligne; j++) {
                this.tab[i][j].show();
            }
        }
    }

    update(){
    	for (let i = 0; i < this.colonne; i++) {
            for (let j = 0; j < this.ligne; j++) {
                this.tab[i][j].setSquareTemp(this.camera.getPixel(numPixel));
                this.numPixel++;
            }
        }
        this.numPixel = 0;
    }
}