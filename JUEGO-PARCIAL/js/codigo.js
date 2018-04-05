var ancho = 500;
var alto  = 625;
var tecla = 0;
/*var dentro de una funcion seria local*/
var frase = "";
var vectorFrase = []; /*contiene la frase ingresada*/
var vectorHecho = []; /*contiene las letras digitalizadas correctamente*/
var img = 7; /*numero de imagenes horca hasta los pies*/
var presiono = 0; /*indicar mas adelante si se presiono el boton jugar*/
var perdio = 0; /*indicar si perdio para que no pueda ganar*/
var gano = 0; /*indicar si gano para que no pierda si apreta mas teclas*/
var palabras = ["todo no es facil", "hola mundo", "hipotiroidismo", "corticoides", "Desenlace", "agazapado", "blancuzco", "apercibimiento"]; /*si selecciona el modo2*/
var pal = 0; /*para indicar si se escogio el MODO2*/
var men = 0; /*para indicar si se escogio el MODO1*/


function iniciar(){ /*cargar las imagenes para el canvas*/
	canvas = document.getElementById("lienzo");
	canvas.width = ancho;
	canvas.height = alto;

	/*Obteniendo el texto*/
	contextoCanvas = canvas.getContext("2d") /*almacena si esta en 2d o 3d y la hace referencia de la etiqueta*/

	imgCuaderno = new Image();
	imgCuaderno.src = "imagenes/CUADERNO.png";

	imgCuaderno.onload = function(){ /*cargar la imagen*/
	contextoCanvas.drawImage(imgCuaderno,-5,-40,500,700); } /*(img,x,y,ancho,alto) que voy a dibujar*/

	/*llamar las imagenes*/
	imgHorca = new Image();
	imgHorca.src = "imagenes/POSTE Y CUERDA.png";

	imgCabeza = new Image();
	imgCabeza.src = "imagenes/CABEZA.png";

	imgCuerpo = new Image();
	imgCuerpo.src = "imagenes/CUERPO.png";

	imgManoDer = new Image();
	imgManoDer.src = "imagenes/MANO DERECHA.png";

	imgManoIzq = new Image();
	imgManoIzq.src = "imagenes/MANO IZQUIERDA.png";

	imgPieDer = new Image();
	imgPieDer.src = "imagenes/PIE DERECHO.png";

	imgPieIzq = new Image();
	imgPieIzq.src = "imagenes/PIE IZQUIERDO.png";
 
}

window.addEventListener("load", iniciar) /*cargar la funcion iniciar*/


function jugar() { /*si selecciona el MODO 1*/
	frase = prompt("Ingrese la frase que desee:").trim().toUpperCase(); /*el .toUpperCase() convierte todo a mayuscula*/
	men = 1; /*cambia a 1 para saber en la validacion de mas adelante que modo es*/
	presiono = 1; /*para indicar mas abajo que no este en vacio el texto*/
	logica(frase);

}

function jugar1() { /*si selecciona el MODO 1*/
	posicionVec = Math.floor(Math.random()*palabras.length); /*número aleatorio*/
	frase = palabras[posicionVec].trim().toUpperCase(); /*el .toUpperCase() convierte todo a mayuscula*/
	pal = 1; /*cambia a 1 para saber en la validacion de mas adelante que modo es*/
	presiono = 1; /*para indicar mas abajo que no este en vacio el texto*/
	logica(frase);
}

function logica(mensaje){
	var filtro = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890,.'; /*Caracteres validos*/
    var cumplio = 1;
    var entro = 1;
    /*esta logica principalmente sirve para verificar el MODO1 pero tambien sirve para validar que el vector de */
    /*palabras para MODO2 tengas caracteres validos*/
    while (cumplio==1){
    	fraseMomento = frase.replace(/\s/g,""); /*es mejor analizarlo sin espacios por si es una frase*/
    	test(fraseMomento)
    	for (var i=0; i<fraseMomento.length; i++){ /*se recorre la frase que esta ahora en un vector*/
	       if (filtro.indexOf(fraseMomento.charAt(i)) == -1){ /*si entra significa que no hay un caracter valido*/
		      test("entro");
		      i = fraseMomento.length+1; /*con una que encuentre se debe pedir de nuevo la frase*/
		      entro = 0;
	       }
		}
		if (entro == 1) { /*si no encontro un caracter invalido sale del ciclo*/
			cumplio = 0;
		}
		if (entro == 0) { /*si encontro un caracter invalido se vuelve a preguntar la frase*/
			if (men == 1) { /*dependiendo del MODO se pide la frase o se cambia la palabra*/
				frase = prompt("Ingrese nuevamente la frase que desee:").trim().toUpperCase(); /*el .toUpperCase() convierte todo a mayuscula*/
			}
			if (pal == 1) {
				posicionVec = Math.floor(Math.random()*palabras.length); /*número aleatorio*/
				frase = palabras[posicionVec].trim().toUpperCase(); /*el .toUpperCase() convierte todo a mayuscula*/
			}
			/*entro = 1;*/
		}
    }


	if (frase!=" ") { /*evaluar que no sea una cadena vacia*/
		vectorFrase = frase.split(""); /*el .split convierte la cadena en un vector, caracter por caracter. Por un "sin espacio"*/
		console.log(vectorFrase);

		/*crear un vector con las lineas, comas y los espacios de la frase*/
		for (var i = 0; i < vectorFrase.length; i++) {
			if (vectorFrase[i]!=" ") { /*si se encontro una letra*/
				vectorHecho[i] = "__";
			}
			if (vectorFrase[i]==" ") { /*si se encontro un espacio*/
				vectorHecho[i] = "-";
			}
			if (vectorFrase[i]==",") { /*si se encontro una coma*/
				vectorHecho[i] = "%";
			}
		
		}
		console.log(vectorHecho);
		/*dar el vistaso de los espacios de la frase antes de empezar el juego*/
		vectorHechoString=vectorHecho.toString().replace(/,/gi," "); /*al cambiar a string pone , como separador, entonces se modifica por un espacio*/
		document.getElementById("hechoPorJugador").innerHTML=vectorHechoString.replace(/%/gi,","); /*volver a poner las comas*/
        
    }

}

/*evento para saber que tecla se esta escribiendo*/
document.addEventListener("keydown", function(event){ /*funcion anonima, no requiere nombre*/

	tecla = event.which || event.keycode; /*cual tecla es || cual codigo es*/

	tecla = String.fromCharCode(tecla); /*Realiza la conversion de número letra, en mayuscula*/
	test("La tecla press es:" +tecla)

	var esta = vectorFrase.indexOf(tecla) /*da la primera posición de la letra, cuando es -1 significa que no esta*/
	if (esta != -1) {
	    for (var i = 0; i < vectorFrase.length; i++) {
	        if (vectorFrase[i]==tecla) { /*si la letra presionada esta en la frase ingresada*/
	            vectorHecho[i] = tecla; /*se va modificando el vector que es visible*/
	        }
	    }
	}

	if (esta == -1) { /*si se presiono una letra que no esta en la frase se pone una imagen*/
		/*se debe evaluar que si se halla empezado el juego y que no halla ganado la partida (ya que solo puede esta aprentando teclas de mas)*/
	    if (img == 7 && presiono==1 && gano == 0) {
	        contextoCanvas.drawImage(imgHorca,-5,-40,500,700); /*se va llamando la imagen*/
	    }
	    if (img == 6 && presiono==1 && gano == 0) {
	        contextoCanvas.drawImage(imgCabeza,-5,-40,500,700);
	    }
	    if (img == 5 && presiono==1 && gano == 0) {
	        contextoCanvas.drawImage(imgCuerpo,-5,-40,500,700);
	    }
	    if (img == 4 && presiono==1 && gano == 0) {
	        contextoCanvas.drawImage(imgManoDer,-5,-40,500,700);
	    }
	    if (img == 3 && presiono==1 && gano == 0) {
	        contextoCanvas.drawImage(imgManoIzq,-5,-40,500,700);
	    }
	    if (img == 2 && presiono==1 && gano == 0) {
	        contextoCanvas.drawImage(imgPieDer,-5,-40,500,700);
	    }
	    if (img == 1 && presiono==1 && gano == 0) {
	        contextoCanvas.drawImage(imgPieIzq,-5,-40,500,700);
	    }
	    img = img-1; /*se va restando para ir indicando otra imagen y no poner la misma*/
	}

	/*refrescar los datos de visualizacion*/
	var vectorHechoString=vectorHecho.toString().replace(/,/gi," ");
	document.getElementById("hechoPorJugador").innerHTML=vectorHechoString.replace(/%/gi,",");

	if (img == 0 && presiono == 1 && gano == 0) { 
		/*si se termina las imagenes y no gano antes, significa que perdio*/
		perdio = 1;
		alert("perdio")
	}

    var entro = 1;

	for (var i=0; i<vectorHecho.length; i++){
		if (vectorFrase[i] != vectorHecho[i]) { /*comparar letra por letra de lo que se ha hecho con respeto a la frase inicial*/
			/*si entra es por una condicion que no cumplio y es suficiente para determinar que no ha ganado*/

			/*solo si paso lo anterior la condicion especial es que modifique " " por un -*/
			if ((vectorFrase[i] == " ") && (vectorHecho[i] == "-")) { /*por si es un espacio*/
				entro = 1; /*si es un espacio la frase se debe seguir evualuando*/
			}
			else{
				entro = 0; /*si entra no esta completa la frase*/
				i = vectorHecho.length; /*sale del for ahi mismo*/
			}
		}
	}

	if (entro == 1 && presiono == 1 && perdio == 0) { /*frase completada*/
		alert("ganado")
		gano = 1;
	}

});

/*para verificar si esta tomando la funcion cuando inicia*/
function test(mensaje){
    console.log(mensaje);
}


function limpiar(){
	contextoCanvas.clearRect(0,0,canvas.width,canvas.height);
    presiono = 0;
    document.getElementById("hechoPorJugador").innerHTML="Lineas de la frase";
    pal = 0;
    men = 0;
    vectorFrase = []; /*contiene la frase ingresada*/
	vectorHecho = [];
	frase = "";
	img = 7;
	perdio = 0; /*indicar si perdio para que no pueda ganar*/
	gano = 0;
    iniciar();
}

