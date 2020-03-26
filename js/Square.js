class Square {
  constructor(x, y, w, temp) {
    this.width = w;
    this.x = x;
    this.y = y;
    this.r = 10;
    this.g = 10;
    this.b = 10;
    this.temp = temp;
  }

  show() {
    this.calcColor();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.width, this.width);
    fill(0);
    textSize(20);
    text(this.temp, this.x, this.y + 20);    
  }

  setSquareTemp(t){
    this.temp = t;
  }
  
  calcColor(){
    let xMax = 255;
    let x = map(this.temp, 0, 90, 0, xMax*6);
    
    if (x >= 0 && x < 255) {
      this.r = 255;
     this.g = x;
      this.b = 0
    } if (x >= 255 && x < xMax*2) {
      this.r = xMax*2 - x;
      this.g = 255;
      this.b = 0;
    } if (x >= xMax*2 && x < xMax*3){
      this.r = 0;
      this.g = 255;
      this.b = x - xMax*2;
    } if (x >= xMax*3 && x < xMax*4){
      this.r = 0;
      this.g = xMax*4 - x;
      this.b = 255;
    } if (x >= xMax*4 && x < xMax*5){
      this.r = x - xMax*4;
      this.g = 0;
      this.b = 255;
    } if (x >= xMax*5 && x <= xMax*6){
      this.r = 255;
      this.g = 0;
      this.b = xMax*6-x;
    }
  }
}