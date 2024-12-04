class Trampas {
  constructor() {
    this.x = random(100, 500);
    this.y = random(100, 350);
    this.ancho = 50;
    this.alto = 50;
    //this.img;
  }

  dibujar() {
    //imageMode(CENTER);
    image(imgTrampas[img], this.img, this.x, this.y, this.ancho, this.alto);  
    //this.image(imgTrampas[i], this.x, this, y, this.ancho, this.alto );
    //image(imgTrampas[pantallaActual], this.x, this,y, this.ancho, this.alto);
    //this.rect(this.x, this,y, this.ancho, this.alto);
  }

  estaClickeado(px, py) {
    return px > this.x && px < this.x + this.ancho &&
      py > this.y && py < this.y + this.alto;
  }
}
