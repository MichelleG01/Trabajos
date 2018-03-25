/* ----------ejemplo----------*/
console.log("Este es un mensaje usando JavaScript"); /*Invocar la consola, inspector de elementos */
alert("Este es un mensaje usando JavaScript")
/*var nombreVariable = 1234;Declarar variable local */
var cedula = 1234560000000000;
var estatura = 1.20;
var nombre = "raul";
var descripcion = "\" Me describo. \n Como un ladron \\ \" ";
var gustos = ["robar", "jugar futbol", "robar a los compañeros del fútbol"];
var liberal = true;

var golpes = {
	"UdeM": 60000000,
	"UdeA": [30000000, "Una gasimba", "3 zapatos"],
	"Unal": {
		"ingenieria": 10000000,
		"derecho": 15000000,
		"comunicaciones": 20000000
	}
};

if (cedula > 4000000) {
	console.log("Mi nombre es: "+nombre);
	console.log("Mi estatura es: "+estatura);
	console.log(descripcion);
	console.log("Uno de mis gustos es: "+gustos[0]);
}  

/* ---------------------------------------------------------*/
jugador1 = { /*Objetos de variable global */
	Nombre: "Dungeon Master",
	Elemento: "Fuego",
	Exp: 20,
	Salud: 100,
	Ataque: 3,
	Proteccion: 1
};

jugador2 = {
	Nombre: "Dungeon Keeper",
	Elemento: "Hielo",
	Exp: 30,
	Salud: 100,
	Ataque: 2,
	Proteccion: 2
};

function Salud (jugador1, jugador2)
{
	jugador2.Salud = jugador2.Salud - jugador1.Ataque + jugador2.Proteccion;
}
/**
 * [jugador2 description]
 * @type {Object}
 */

/*funcion para determinar quien ataca primero segun la experiencia*/
function selectFirst(jugador1, jugador2)
{
	if (jugador1.Exp > jugador2.Exp) 
	{
		return jugador1;
	}else
	{
		return jugador2;
	}
}

/*recibe lo que saco la funcion selectFirst e indica quien inicia el juego*/
function iniBattle()
{
	var primerGolpe = selectFirst(jugador1, jugador2);
	console.log("El primer golpe será lanzado por: " +primerGolpe.Nombre + " .Mother fucker!!!");
}

iniBattle();