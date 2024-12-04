//let sonidoEncontrarConejo;
//let imgInicio;
let imgFondos=[];
let imgConejo;
let imgTrampas;

function preload() {
  //imgInicio = loadImage("data/trampa0.jpg");
  imgConejo = loadImage("data/conejo.png");
  for (let i = 0; i < 11; i++) {
    imgFondos [i] = loadImage("data/fondo"+i+".jpg");
    for (let img = 0; img < 3; img++) {
      imgTrampas[img] = loadImage("data/trampa" + img + ".jpg");
    }
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
