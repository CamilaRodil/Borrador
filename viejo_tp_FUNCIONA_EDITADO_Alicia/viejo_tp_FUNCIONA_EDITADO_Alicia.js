//https://www.fiftysounds.com/es/musica-libre-de-derechos/un-poquito-de-ritmo.html

let pantallas = new Array(22);
let img = [];
let textoAli;
let minumero;
let numeroactual = 0;

function preload() {
  texto = loadStrings('data/textoAli.txt');
  for (let i = 0; i < pantallas.length; i++) {
    img[i] = loadImage("data/imgs" + i + ".png");
  }
}

function setup() {
  createCanvas(640, 600);
}

function draw() {
  if (numeroactual < pantallas.length) {
    planillabase(numeroactual);
  }
  if (numeroactual === pantallas.length + 1) {
    numeroactual = 0;
  }
  fill(0);
  //BOTONES A Y B forma,color, etc
  if (numeroactual === 5 || numeroactual === 7 || numeroactual === 9 || numeroactual === 11) {
    let d = dist(width / 2, height / 2, mouseX, mouseY);
    let maxDist = dist(0, 0, 2 / width, height / 2);
    let miColor = map(d, 0, maxDist, 10, 50);
    fill(miColor);
    rect(100, 350, 50, 50);
    rect(450, 350, 50, 50);
    fill(255);
    textSize(35);
    text('A', 112, 390);
    text('B', 465, 390);
  }
  //BOTON REINICIAR diseño y pantallas
  if (numeroactual === 16 || numeroactual === 17 || numeroactual === 19 || numeroactual === 14 || numeroactual === 20) {
    let d = dist(width / 2, height / 2, mouseX, mouseY);
    let maxDist = dist(0, 0, 2 / width, height / 2);
    let miColor = map(d, 0, maxDist, 10, 50);
    fill(miColor);
    rect(240, 360, 150, 50);
    fill(255);
    textSize(35);
    text('Reiniciar', 250, 400);
  }
}

function planillabase(pantalla) { //es la portada del juego (titulo, empezar, creditos)
  image(img[pantalla], 0, 0);

  fill(255, 150);
  if (numeroactual !== 0 && numeroactual !== 21) {
    rect(10, 10, 570, 80);
    fill(0);
    textSize(20);
    text(texto[pantalla], 20, 20, 500, 200);
  } else if (numeroactual === 0) {
    textSize(40);
    fill(255);
    text('Alicia en el país de', 120, 150);
    text('las maravillas', 170, 190);
    rect(225, 225, 150, 50);
    rect(225, 300, 150, 50);
    fill(0);
    textSize(30);
    text('Empezar', 245, 260);
    text('Créditos', 250, 335);
  } else if (numeroactual === 21) {
    textSize(30);
    fill(255);
    text('Codigo por: ', 60, 150);
    rect(390, 390, 90, 50);
    fill(0);
    text('Volver', 392, 425);
  }
}

function mousePressed() {
  //Creditos
  if (numeroactual === 21) {
    if (chequebotoncuadrado(450, 500, 450, 500, 1)) {
      numeroactual++;
    }
  }
  //Inicio
  if (numeroactual === 0) {
    if (chequebotoncuadrado(245, 395, 240, 290, 1)) {
      numeroactual++;
    }
    if (chequebotoncuadrado(225, 375, 300, 350, 1)) {
      numeroactual = 21;
    }
    //Pantallas de Reinicio NOTA! si ves chequebotoncuadrado(100, 150, 350, 400, 1) es el boton A, 
    // si ves chequebotoncuadrado(450, 500, 350, 400, 1) es el boton B
  } else {
    if (numeroactual === 16 || numeroactual === 17 ||  numeroactual === 19 || numeroactual === 14 || numeroactual === 20) {
      if (chequebotoncuadrado(0, 640, 0, 480, 1)) {
        numeroactual = 0;
      }
      //principio y fin
    } else {
      if (numeroactual === 0 || numeroactual === 14) {
        if (numeroactual === 14 && chequebotoncuadrado(450, 500, 350, 400, 1)) {
          numeroactual++;
        }
        //saltos temporales
      } else {
        if (numeroactual === 5) {
          if (chequebotoncuadrado(450, 500, 350, 400, 1)) {
            numeroactual = 15;
          }
          else if (chequebotoncuadrado(100, 150, 350, 400, 1)) {
            numeroactual++;
          }
             else if (numeroactual === 5 && chequebotoncuadrado(100, 150, 350, 400, 1)) {
             numeroactual = 6;
             }
             else if (numeroactual === 5 && chequebotoncuadrado(450, 500, 350, 400, 1)) {
             numeroactual = 15; //hasta la 16
             }
             else if (numeroactual === 7 && chequebotoncuadrado(100, 150, 350, 400, 1)) {
             numeroactual = 17;
             }
             else if (numeroactual === 9 && chequebotoncuadrado(450, 500, 350, 400, 1)) {
             numeroactual = 18; //hasta la 19
             }
             else if (numeroactual === 11 && chequebotoncuadrado(100, 150, 350, 400, 1)) {
             numeroactual = 20;
             }
          } else {
            //boton reiniciar
            if (chequebotoncuadrado(0, 640, 0, 480)) {
              numeroactual++;
            }
          }
        }
      }
    }
  }

  function chequebotoncuadrado(posicionx1, posicionx2, posiciony1, posiciony2, elnumero) {
    let miposicionx1 = posicionx1;
    let miposicionx2 = posicionx2;
    let miposiciony1 = posiciony1;
    let miposiciony2 = posiciony2;

    minumero = elnumero;

    for (let i = 0; i < 21; i++) {
      pantallas[i] = 1;
      pantallas[minumero] = 0;
    }

    return (mouseX > miposicionx1 && mouseX < miposicionx2 && mouseY > miposiciony1 && mouseY < miposiciony2);
  }
