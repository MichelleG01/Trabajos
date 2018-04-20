var Nombre="";

function EnviarNombre(){
	cosas.parentNode.removeChild(cosas);
	cosas = document.createElement('div');
	cosas.id = 'cosas';
	document.body.appendChild(cosas);

	Nombre = document.getElementById("Nombre").value;

	$.ajax({
		type:"GET",
		url:"http://api.tvmaze.com/search/shows?q="+Nombre,
		dataType:"json",

		success:function(data){

			for (var i = 0; i < data.length; i++) {

				NombreAjax=data[i].show.name;
				PuntajeAjax=data[i].score;
				IdiomaAjax=data[i].show.language;
				GeneroAjax=data[i].show.genres;

				var img1 = document.createElement("img");
				
				if (data[i].show.image == null) {
					img1.src = "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
				}
				else{
					img1.src = data[i].show.image.medium;
				}
				espacio = document.createElement('div');
				espacio.id = 'hola';
				cosas = document.getElementById('cosas');
				cosas.appendChild(img1);


				var informacion = "<div id='informacion'>";
				informacion += "<table>";
				informacion += "   <tr>";//Nueva fila
				informacion += "      <td><strong>Nombre: </strong>"+NombreAjax+".</td>";//Primer columna
				informacion += "   </tr>";//Cierra fila
				informacion += "   <tr>";//Nueva fila
				informacion += "      <td><strong>Puntaje: </strong>"+PuntajeAjax+".</td>";//Primer columna
				informacion += "   </tr>";//Cierra fila
				informacion += "   <tr>";//Nueva fila
				informacion += "      <td><strong>Idioma: </strong>"+IdiomaAjax+".</td>";//Primer columna
				informacion += "   </tr>";//Cierra fila
				informacion += "   <tr>";//Nueva fila
				informacion += "      <td><strong>Generos: </strong>"+GeneroAjax+".</td>";//Primer columna
				informacion += "   </tr>";//Cierra fila
				informacion += "</table>";//Cierra tabla
				informacion += "</div>";//Cierra DIV
				
				cosas.innerHTML += informacion;//Le asignamos la variable total que contiene toda esta tabla.		
				cosas.appendChild(espacio);
			}

		}
	})	
}

var controlelemento = 0; //variable para controlar los datos que vamos a mostrar
function EnviarGenero(){
	controlelemento = 0;
	cosas.parentNode.removeChild(cosas);
	cosas = document.createElement('div');
	cosas.id = 'cosas';
	document.body.appendChild(cosas);

	Nombre = document.getElementById("Nombre").value;
	Nombre = Nombre.toLowerCase();
	PrimeraLe = Nombre.charAt(0);
	PrimeraLe = PrimeraLe.toUpperCase();
	SubCade = Nombre.substr(1,(Nombre.length-1));
	Nombre = PrimeraLe+SubCade;
	console.log(Nombre);


	$.ajax({
		type:"GET",
		url:"http://api.tvmaze.com/shows",
		dataType:"json",

		success:function(data){

			for (var i = 0; i < data.length; i++) {

				GeneroAjax=data[i].genres;
			
				if (GeneroAjax.indexOf(Nombre) == 0 && controlelemento < 11) {
					NombreAjax=data[i].name;
					PuntajeAjax=data[i].score;
					IdiomaAjax=data[i].language;
					

					var img1 = document.createElement("img");
					
					if (data[i].image == null) {
						img1.src = "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
					}
					else{
						img1.src = data[i].image.medium;
					}
					espacio = document.createElement('div');
					espacio.id = 'hola';
					cosas = document.getElementById('cosas');
					cosas.appendChild(img1);				


					var informacion = "<div id='informacion'>";
					informacion += "<table>";
					informacion += "   <tr>";//Nueva fila
					informacion += "      <td><strong>Nombre: </strong>"+NombreAjax+".</td>";//Primer columna
					informacion += "   </tr>";//Cierra fila
					informacion += "   <tr>";//Nueva fila
					informacion += "      <td><strong>Puntaje: </strong>"+PuntajeAjax+".</td>";//Primer columna
					informacion += "   </tr>";//Cierra fila
					informacion += "   <tr>";//Nueva fila
					informacion += "      <td><strong>Idioma: </strong>"+IdiomaAjax+".</td>";//Primer columna
					informacion += "   </tr>";//Cierra fila
					informacion += "   <tr>";//Nueva fila
					informacion += "      <td><strong>Generos: </strong>"+GeneroAjax+".</td>";//Primer columna
					informacion += "   </tr>";//Cierra fila
					informacion += "</table>";//Cierra tabla
					informacion += "</div>";//Cierra DIV
					
					cosas.innerHTML += informacion;//Le asignamos la variable total que contiene toda esta tabla.		
					cosas.appendChild(espacio);

					controlelemento = controlelemento+1;

				}

			}

		}
	})	
}