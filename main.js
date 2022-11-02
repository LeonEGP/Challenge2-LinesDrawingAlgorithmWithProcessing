//Programa que implementa el dibujado de puntos de una línea, dados dos puntos (x,y).
//Programador: León Emiliano García Pérez (A00573074).
//Fecha de entrega: 02.11.2022.

//Forma de ejecutar: En Editor P5JS
//  1.- Ir a https://editor.p5js.org/
//  2.- Copiar el presente código
//  3.- Darle "play".


//Función que crea el Canvas donde se realiza el dibujado.
function setup() {
  createCanvas(400, 400);
}

//Función que dibuja las líneas mediante puntos.
function draw() {
  background(220);
  puntos(1,2,100,20);
  puntos(10,200,50,10);
  puntos(300,300,10,10);
  puntos(200,300,250,50);
  puntos(350,350,100,300);
}

//Función que dibuja los puntos entre dos puntos, dados los valores x1,y1 y x2,y2.
function puntos(x1, y1, x2, y2){
  
  var primeraX;
  var primeraY;
  var segundaX;
  var segundaY;
  
  if (x1 < x2){
    primeraX = x1;
    primeraY = y1;
    segundaX = x2;
    segundaY = y2;
  }
  
  if (x1 > x2){
    primeraX = x2;
    primeraY = y2;
    segundaX = x1;
    segundaY = y1;
  }
    
  var discriminante1 = (segundaY-primeraY);
  var discriminante2 = (segundaX-primeraX);
  
  var pendiente = discriminante1/discriminante2;
  
  var yAux = primeraY;
  
  for (var i = primeraX; i<= segundaX; i++){
    
    var nuevaY;
    nuevaY = Math.round(yAux);
    point(i,nuevaY);
    
    var terminoMedio;
    terminoMedio = (yAux+yAux+pendiente)/2;
    var otraY = Math.round(terminoMedio);  
    point(i,otraY);
    
    yAux += pendiente;
  }
  
}
