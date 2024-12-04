class Juego {
  constructor() {
    this.pantallaInicio = new PantallaInicio();
    this.pantallaInstrucciones = new PantallaInstrucciones();
    this.pantallaCreditos = new PantallaCreditos();
    this.enPantallaInicio = true;
    this.enPantallaInstrucciones = false;
    this.enPantallaCreditos = false;
    this.enPantallaPerdiste = false;
    this.pantallaActual = 0;
    this.pantallas = [];
    this.ganarPuntos = 0;
    this.trampas = [];
    this.imgFondos = [];
    this.imgTrampas = [];

    // Crear pantallas de juego y conejo
    for (let i = 0; i < 10; i++) {
      this.pantallas.push(new conejoBlanco());
      this.imgFondos[i] = loadImage("data/fondo" + i + ".jpg");
    }
    for (let img = 0; img < 3; img++) {
      this.imgTrampas[img] = loadImage("data/trampa" + img + ".jpg");
    }


// Propiedades del botón Volver en las pantallas finales
this.botonVolverFinX = width / 2 - 50;
this.botonVolverFinY = height / 2 + 100;
this.botonVolverFinAncho = 100;
this.botonVolverFinAlto = 40;
}

dibujarPantalla() {
  if (this.enPantallaInicio) {
    this.pantallaInicio.dibujar();
  } else if (this.enPantallaInstrucciones) {
    this.pantallaInstrucciones.dibujar();
  } else if (this.enPantallaCreditos) {
    this.pantallaCreditos.dibujar();
  } else if (this.enPantallaPerdiste) {
    // Dibujar fondo si existe para la pantalla de pérdida
    //if (fondo[this.pantallaActual]) {
    //image(fondo[this.pantallaActual], 0, 0, width, height);
    //}
    textSize(32);
    fill(0);
    text('¡Oh no! Caíste en una trampa.', width / 2, height / 3);
    text('¡Perdiste!', width / 2, height / 3 - 50);

    // Dibujar botón Volver
    fill(100, 150, 250);
    rect(this.botonVolverFinX, this.botonVolverFinY, this.botonVolverFinAncho, this.botonVolverFinAlto, 10);

    // Texto del botón de volver
    textSize(20);
    fill(255);
    text("Volver", width / 2, this.botonVolverFinY + this.botonVolverFinAlto / 1.5);
  } else if (this.pantallaActual < this.pantallas.length) {
    // Dibujar fondo de la pantalla actual
    image(imgFondos[this.pantallaActual], 0, 0, width*2, height*2);
    this.pantallas[this.pantallaActual].dibujar();
    // Bucle clásico para dibujar las trampas
      for (let i = 0; i < this.trampas.length; i++) {
        this.trampas[img].dibujar();
      }
    textSize(20);
    fill(255);
    text("Puntos: " + this.ganarPuntos, 60, 30);
  } else {
    // Pantalla de victoria
    textSize(32);
    fill(0);
    text('Encontraste el Conejo Blanco!', width / 2, height / 3);
    text('¡Ganaste!', width / 2, height / 3 - 50);

    // Dibujar botón Volver
    fill(100, 150, 250);
    rect(this.botonVolverFinX, this.botonVolverFinY, this.botonVolverFinAncho, this.botonVolverFinAlto, 10);

    // Texto del botón de volver
    textSize(20);
    fill(255);
    text("Volver", width / 2, this.botonVolverFinY + this.botonVolverFinAlto / 1.5);
  }
}

botonVolverFinClickeado(px, py) {
  return px > this.botonVolverFinX && px < this.botonVolverFinX + this.botonVolverFinAncho &&
    py > this.botonVolverFinY && py < this.botonVolverFinY + this.botonVolverFinAlto;
}

iniciar() {
  if (this.enPantallaInicio) {
    if (this.pantallaInicio.botonEmpezarClickeado(mouseX, mouseY)) {
      this.enPantallaInicio = false;
    } else if (this.pantallaInicio.botonInstruccionesClickeado(mouseX, mouseY)) {
      this.enPantallaInicio = false;
      this.enPantallaInstrucciones = true;
    } else if (this.pantallaInicio.botonCreditosClickeado(mouseX, mouseY)) {
      this.enPantallaInicio = false;
      this.enPantallaCreditos = true;
    }
  } else if (this.enPantallaInstrucciones || this.enPantallaCreditos) {
    if (this.pantallaInstrucciones.botonVolverClickeado(mouseX, mouseY) ||
      this.pantallaCreditos.botonVolverClickeado(mouseX, mouseY)) {
      this.enPantallaInicio = true;
      this.enPantallaInstrucciones = false;
      this.enPantallaCreditos = false;
    }
  } else if (this.enPantallaPerdiste || this.pantallaActual >= this.pantallas.length) {
    // Detectar clic en el boton Volver de las pantallas finales
    if (this.botonVolverFinClickeado(mouseX, mouseY)) {
      this.enPantallaInicio = true;
      this.enPantallaPerdiste = false;
      this.pantallaActual = 0;
      this.ganarPuntos = 0;
    }
  } else {
    console.log("entrando");
    let conejoBlanco = this.pantallas[this.pantallaActual];
    if (conejoBlanco.estaClickeado(mouseX, mouseY)) {
      this.pantallaActual++;
      this.ganarPuntos+= 100;
      this.trampas = [i];
      for (let i = 0; i < 3; i++) {
        this.trampas.push(new Trampas());
        this.imgTrampas[img] = loadImage("data/trampa" + img + "jpg");
      }
    } else {
      // Revisar clic en trampas
      for (let i = 0; i < this.trampas.length; i++) {
        let trampa = this.trampas[i];
        if (trampa.estaClickeado(mouseX, mouseY)) {
          this.enPantallaPerdiste = true;
          break;
        }
      }
    }
  }
}
}
