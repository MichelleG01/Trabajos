var ancho = 600;
var alto  = 400;
var tecla = 0;
/*var dentro de una funcion seria local*/


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

	imgHorca.onload = function(){
		contextoCanvas.drawImage(imgHorca,0,0,200,200); /*(img,x,y,tamañoPX,escala) que voy a dibujar*/
	}
	
}

/*para verificar si esta tomando la funcion cuando inicia*/
function test(mensaje){
	console.log(mensaje);
}

window.addEventListener("load", iniciar)

/*evento para saber que tecla se esta escribiendo*/
document.addEventListener("keydown", function(event){ /*funcion anonima, no requiere nombre*/
	tecla = event.which || event.keycode; /*cual tecla es || cual codio es*/
	test("La tecla press es:" +tecla)
}); 