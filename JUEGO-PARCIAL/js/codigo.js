var ancho = 600;
var alto  = 400;
var tecla = 0;
/*var dentro de una funcion seria local*/
var vectorFrase = [];
var vectorHecho = [];
var vectorLetra = [];
var img = 7; /*numero de imagenes horca hasta los pies*/


function iniciar(){
	canvas = document.getElementById("lienzo");
	canvas.width = ancho;
	canvas.height = alto;

	/*Obteniendo el texto*/
	contextoCanvas = canvas.getContext("2d") /*almacena si esta en 2d o 3d y la hace referencia de la etiqueta*/

	imgHorca = new Image();
	imgHorca.src = "imagenes/horca.png";

	imgCabeza = new Image();
	imgCabeza.src = "imagenes/cabeza.png";

	imgBrazo = new Image();
	imgBrazo.src = "imagenes/brazo.png";

	/*imgHorca.onload = function(){
		contextoCanvas.drawImage(imgHorca,0,0,200,200); } /*(img,x,y,tamañoPX,escala) que voy a dibujar*/
 

	var pista = prompt("Ingrese la pista");
	if (pista!=null){ /*evaluar que no sea una cadena vacia*/
		document.getElementById("pistaVisible").innerHTML=pista.trim(); /*el .trim() quita los espacios del inicio y fin*/
	}

	var frase = prompt("Ingrese la frase").trim().toUpperCase(); /*el .toUpperCase() convierte todo a mayuscula*/
	if (frase!=null) { /*evaluar que no sea una cadena vacia*/
		vectorFrase = frase.split(""); /*el .split convierte la cadena en un vector, caracter por caracter*/
		console.log(vectorFrase);
	}

	/*crear un vector con las lineas y los espacios de la frase*/
	for (var i = 0; i < vectorFrase.length; i++) {
		if (vectorFrase[i]!=" ") {
			vectorHecho[i] = "__";
		}
		if (vectorFrase[i]==" ") {
			vectorHecho[i] = "|";
		}
		
	}
	console.log(vectorHecho);
	/*dar el vistaso de los espacios de la frase antes de empezar el juego*/
	document.getElementById("hechoPorJugador").innerHTML=vectorHecho.toString().replace(/,/gi," ");


}

/*para verificar si esta tomando la funcion cuando inicia*/
function test(mensaje){
	console.log(mensaje);
}

function evaluar(frase){

}


window.addEventListener("load", iniciar) /*cargar la funcion iniciar*/


/*evento para saber que tecla se esta escribiendo*/
document.addEventListener("keydown", function(event){ /*funcion anonima, no requiere nombre*/
	tecla = event.which || event.keycode; /*cual tecla es || cual codigo es*/

	tecla = String.fromCharCode(tecla); /*Realiza la conversion de número letra*/
	test("La tecla press es:" +tecla)


	var esta = vectorFrase.indexOf(tecla) /*da la primera posición de la letra, cuando es -1 significa que no esta*/
	test(esta)
	if (esta != -1) {
		for (var i = 0; i < vectorFrase.length; i++) {
			if (vectorFrase[i]==tecla) {
				vectorHecho[i] = tecla;
			}
		}
	}

	if (esta == -1) {
		if (img == 7) {
			contextoCanvas.drawImage(imgHorca,0,0,200,200);
		}
		if (img == 6) {
			contextoCanvas.drawImage(imgCabeza,100,150,200,200);
		}
		if (img == 5) {
			contextoCanvas.drawImage(imgBrazo,180,200,200,200);
			alert("murio");
		}
		img = img-1;
	}


	document.getElementById("hechoPorJugador").innerHTML=vectorHecho.toString().replace(/,/gi," ");


}); 

