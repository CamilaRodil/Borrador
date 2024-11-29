class Trampas {
  constructor() {
    this.x = random(100, 500);
    this.y = random(100, 350);
    this.ancho = 50;
    this.alto = 50;
  }

  dibujar() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.ancho, this.alto);
  }

  estaClickeado(px, py) {
    return px > this.x && px < this.x + this.ancho &&
           py > this.y && py < this.y + this.alto;
  }
}
