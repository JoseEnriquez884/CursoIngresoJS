//Enriquez Jose
/*
Enunciado b)
de una cantidad de animales indeteminada del zoologico debemos tomar lo siguiente
-raza
-peso
-temperatura media del lugar donde habita
-edad
-si esta en peligro de extincion( si o no)
-se debe informar:

1-el promedio de edad total xx
2-la raza del mas pesado xx
3-la cantidad de animales en extincion que hay xx


4- la temperatura minima ingresada xx
5- la tempearatura maxima ingresada de los animales en extincion xx
*/
function mostrar()
{
	var respuesta;
	var contador;
	var razaIngresada;
	var pesoIngresado;
	var temperaturaIngresada;
	var edadIngresada;
	var situacionDelAnimal;
	var contadorDeEdades;
	var sumadorDeEdades;
	var promedioDeEdades;
	var pesoMaximo;
	var razaDelMasPesado;
	var cantidadDeAnimalesEnExtincion;
	var temperaturaMinima;
	var banderaDeLaPrimeraTemperatura;
	var temperaturaMaximaDeAnimalesEnExtincion;


	respuesta="si";
	contador=0;
	contadorDeEdades=0;
	sumadorDeEdades=0;
	cantidadDeAnimalesEnExtincion=0;
	banderaDeLaPrimeraTemperatura="es la primera";

	while(respuesta=="si")
	{
		razaIngresada=prompt("ingrese raza");
		while(isNaN(razaIngresada)==false)
		{
			razaIngresada=prompt("error, reingrese raza valida");
		}

		pesoIngresado=prompt("ingrese peso");
		pesoIngresado=parseInt(pesoIngresado);
		while(isNaN(pesoIngresado)==true || pesoIngresado<0)
		{
			pesoIngresado=prompt("error, reingrese peso valido");
			pesoIngresado=parseInt(pesoIngresado);
		}

		temperaturaIngresada=prompt("ingrese temperatura");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true)
		{
			temperaturaIngresada=prompt("error, reingrese temperatura valida");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}

		edadIngresada=prompt("ingrese edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0)
		{
			edadIngresada=prompt("error, reingrese edad valida");
			edadIngresada=parseInt(edadIngresada);
		}

		situacionDelAnimal=prompt("Esta en peligro de extincion?");
		while(isNaN(situacionDelAnimal)==false || situacionDelAnimal!="si" && situacionDelAnimal!="no")
		{
			situacionDelAnimal=prompt("error, ingrese respuesta valida");
		}

		//punto 1
		contadorDeEdades=contadorDeEdades+1;
		sumadorDeEdades=sumadorDeEdades+edadIngresada;

		//punto 2
		if(contador==0)
		{
			pesoMaximo=pesoIngresado;
			razaDelMasPesado=razaIngresada;
			temperaturaMinima=temperaturaIngresada;//punto 4
		}else
		{
			if(pesoIngresado>pesoMaximo)
			{
				pesoMaximo=pesoIngresado;
				razaDelMasPesado=razaIngresada;
			}
			if(temperaturaIngresada<temperaturaMinima)
			{
				temperaturaMinima=temperaturaIngresada;
			}
		}

		//punto 3
		if(situacionDelAnimal=="si")
		{
			cantidadDeAnimalesEnExtincion=cantidadDeAnimalesEnExtincion+1;
			if(banderaDeLaPrimeraTemperatura=="es la primera")//punto 5
			{
				banderaDeLaPrimeraTemperatura="ya paso";
				temperaturaMaximaDeAnimalesEnExtincion=temperaturaIngresada;
			}else
			{
				if(temperaturaIngresada>temperaturaMaximaDeAnimalesEnExtincion)
				{
					temperaturaMaximaDeAnimalesEnExtincion=temperaturaIngresada;
				}
			}
		}

		respuesta=prompt("desea continuar?");
		contador=contador+1;
	}

	promedioDeEdades=sumadorDeEdades/contadorDeEdades;

	console.log("promedio de edades "+promedioDeEdades);
	console.log("el animal mas pesado es de raza "+razaDelMasPesado+" y pesa "+pesoMaximo);
	console.log("hay "+cantidadDeAnimalesEnExtincion+" animales en peligro de extincion");
	console.log("la temperatura minima es "+temperaturaMinima);
	console.log("la temperatura maxima de los animales en extincion es "+temperaturaMaximaDeAnimalesEnExtincion);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	var claveIngresada;
	claveIngresada=prompt("ingrese clave");
	while(claveIngresada!="utn750")
	{
		claveIngresada=prompt("esta mal, ingrese la clave correctamente");
	}

	alert("Bienvenido a utn");
	
	*/
	
	
	/*var claveIngresada;
	claveIngresada=prompt("ingrese el numero clave");//mientras la condicion se cumpla(es decir que sea verdadera),se va a iterar el while
	
	while(claveIngresada!="utn750")
	{
		claveIngresada=prompt("error, ingrese el numero clave");
	}
	alert("Bienvenido");/*cuando la condicion del while es falsa sale del while 
	y sigue ejecutando el codigo que sigue*/
	
}//FIN DE LA FUNCIÓN
