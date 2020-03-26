var initcube;

function setup() {
    createCanvas(600, 600);

    initcube = new Initcube2();

}

function draw() {
    initcube.update();
}