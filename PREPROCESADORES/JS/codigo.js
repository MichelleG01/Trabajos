/*quedarse escuchando a iniciarGame y cuanso hagan click ir a esa funcion*/
$("#iniciarGame").click(function(){
	initMejorado()
});

function init() {
	var nombreJugador1 = document.getElementById("jugador1").value;
	var nombreJugador2 = document.getElementById("jugador2").value;

	console.log("El jugador1 es:"+nombreJugador1);
	console.log("El jugador2 es:"+nombreJugador2);

}

function initMejorado(){
	var nombrePlayer1 = $("#jugador1").val();
	var nombrePlayer2 = $("#jugador2").val();

	console.log("---------Usando Jquery---------");
	console.log("El jugador1 es:"+nombrePlayer1);
	console.log("El jugador2 es:"+nombrePlayer2);

}