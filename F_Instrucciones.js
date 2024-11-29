class PantallaInstrucciones {
  constructor() {
    this.texto = "Instrucciones:\nEncuentra al conejo blanco en cada pantalla\npara ganar puntos. ¡Buena suerte!";
    this.botonVolverX = width / 2 - 50;
    this.botonVolverY = height / 2 + 100;
    this.botonVolverAncho = 100;
    this.botonVolverAlto = 40;
  }

  dibujar() {
    // Dibujar instrucciones
    textSize(24);
    fill(0);
    textAlign(CENTER);
    text(this.texto, width / 2, height / 3);

    // Dibujar botonn de volver
    fill(100, 150, 250);
    rect(this.botonVolverX, this.botonVolverY, this.botonVolverAncho, this.botonVolverAlto, 10);

    // Texto del botOn de volver
    textSize(20);
    fill(255);
    text("Volver", width / 2, this.botonVolverY + this.botonVolverAlto / 1.5);
  }

  botonVolverClickeado(px, py) {
    return px > this.botonVolverX && px < this.botonVolverX + this.botonVolverAncho &&
           py > this.botonVolverY && py < this.botonVolverY + this.botonVolverAlto;
  }
}
