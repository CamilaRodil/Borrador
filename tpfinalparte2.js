

//let fondo = [];
let sonidoEncontrarConejo;
let imgFondos;
let imgConejo;

function preload() {
  imgConejo = loadImage("data/conejo.png");
  for (let i = 0; i < fondo.length; i++) {
    imgFondos [i] = loadImage("data/fondo"+i+".jpg")
    //imgFondo = loadImage("data/trampa0.jpg");
  }
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();
}

function draw() {
  background(220);
  objJuego.dibujarPantalla();
}

function mousePressed() {
  objJuego.iniciar();
}
