/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
xx a) El nombre de la persona con mas temperatura. 
xx b) Cuantos mayores de edad estan viudos
xx c) La cantidad de hombres que hay solteros o viudos. 
xx d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	var respuesta;
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var situacionSentimental;
	var temperaturaIngresada;
	var banderaDePrimerTemperatura;
	var temperaturaMaxima;
	var temperaturaMaximaNombre;
	var contadorMayoresDeEdadViudos;
	var contadorHombresSolteros;
	var contadorHombresViudos;
	var contadorMayoresConTemperatura;
	var acumuladorEdadHombresSolteros;
	var promedioEdadHombresSolteros;

	respuesta="si";
	banderaDePrimerTemperatura="es la primer temperatura";
	contadorMayoresDeEdadViudos=0;
	contadorHombresSolteros=0;
	contadorHombresViudos=0;
	contadorMayoresConTemperatura=0;
	acumuladorEdadHombresSolteros=0;
	
	while(respuesta=="si")
	{
		nombreIngresado=prompt("ingrese nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("error, reingrese nombre");
		}
		edadIngresada=prompt("ingrese edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0)
		{
			edadIngresada=prompt("error, reingrese edad");
			edadIngresada=parseInt(edadIngresada);
		}
		sexoIngresado=prompt("ingrese sexo");
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("error, reingrese sexo");
		}
		situacionSentimental=prompt("ingrese estado civil");
		while(situacionSentimental!="casado" && situacionSentimental!="soltero" && situacionSentimental!="viudo")
		{
			situacionSentimental=prompt("error, reingrese estado civil");
		}
		temperaturaIngresada=prompt("ingrese temperatura");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true)
		{
			temperaturaIngresada=prompt("error, reingrese temperatura");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}

		if(banderaDePrimerTemperatura=="es la primer temperatura")
		{
			banderaDePrimerTemperatura="ya paso";
			temperaturaMaxima=temperaturaIngresada;
			temperaturaMaximaNombre=nombreIngresado;
		}else
		{
			if(temperaturaIngresada>temperaturaMaxima)
			{
				temperaturaMaxima=temperaturaIngresada;
				temperaturaMaximaNombre=nombreIngresado;	
			}
		}

		if(situacionSentimental=="viudo")
		{
			if(edadIngresada>17)
			{
				contadorMayoresDeEdadViudos++;
			}
		}

		if(sexoIngresado=="m")
		{
			switch(situacionSentimental)
			{
				case "soltero":
					contadorHombresSolteros++;
					acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edadIngresada;
					break;
				case "viudo":
					contadorHombresViudos++;
					break;
			}
		}

		if(edadIngresada>60)
		{
			if(temperaturaIngresada>38)
			{
				contadorMayoresConTemperatura++;
			}
		}

		respuesta=prompt("desea continuar?");
	}
	
	promedioEdadHombresSolteros=acumuladorEdadHombresSolteros/contadorHombresSolteros;
	
	console.log("nombre de la persona con mas temperatura:"+temperaturaMaximaNombre);
	
	if(contadorMayoresDeEdadViudos!=0)
	{
		console.log("mayores de edad viudos: "+contadorMayoresDeEdadViudos);
	}else
	{
		console.log("no hay mayores de edad viudos");
	}

	if(contadorHombresViudos!=0)
	{
		console.log("hombres que hay viudos: "+contadorHombresViudos);
	}else
	{
		console.log("no hay hombres viudos");
	}

	if(contadorHombresSolteros!=0)
	{
		console.log("hombres que hay solteros: "+contadorHombresSolteros);
		console.log("promedio edad de hombre solteros: "+promedioEdadHombresSolteros);
	}else
	{
		console.log("no hay hombres solteros");
	}

	if(contadorMayoresConTemperatura!=0)
	{
		console.log("personas de tercera edad con mas de 38 de temperatura: "+contadorMayoresConTemperatura);
	}else
	{
		console.log("no hay personas de tercera edad con mas de 38 de temperatura");
	}
	
	/*
	var respuesta;
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var situacionSentimental;
	var temperaturaIngresada;
	var banderaDePrimerTemperatura;
	var temperaturaMaxima;
	var temperaturaMaximaNombre;
	var contadorMayoresDeEdadViudos;
	var contadorHombresSolteros;
	var contadorHombresViudos;
	var contadorMayoresConTemperatura;
	var acumuladorEdadHombresSolteros;
	var promedioEdadHombresSolteros;

	respuesta="si";
	banderaDePrimerTemperatura="es la primera";
	contadorMayoresDeEdadViudos=0;
	contadorHombresSolteros=0;
	contadorHombresViudos=0;
	contadorMayoresConTemperatura=0;
	acumuladorEdadHombresSolteros=0;

	while(respuesta=="si")
	{
		nombreIngresado=prompt("ingrese nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("error, reingrese nombre");
		}
		edadIngresada=prompt("ingrese edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0)
		{
			edadIngresada=prompt("error, reingrese edad");
			edadIngresada=parseInt(edadIngresada);	
		}
		sexoIngresado=prompt("ingrese sexo");
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("error, reingrese sexo");
		}
		situacionSentimental=prompt("ingrese estado civil");
		while(situacionSentimental!="soltero" && situacionSentimental!="casado" && situacionSentimental!="viudo")
		{
			situacionSentimental=prompt("error, reingrese estado civil");
		}
		temperaturaIngresada=prompt("ingrese temperatura");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true)
		{
			temperaturaIngresada=prompt("ingrese temperatura");
			temperaturaIngresada=parseInt(temperaturaIngresada);	
		}

		//a) El nombre de la persona con mas temperatura.
		if(banderaDePrimerTemperatura=="es la primera")
		{
			banderaDePrimerTemperatura="ya no lo es";
			temperaturaMaxima=temperaturaIngresada;
			temperaturaMaximaNombre=nombreIngresado;
		}else
		{
			if(temperaturaIngresada>temperaturaMaxima)
			{
				temperaturaMaxima=temperaturaIngresada;
				temperaturaMaximaNombre=nombreIngresado;
			}
		}
		//b) Cuantos mayores de edad estan viudos
		if(situacionSentimental=="viudo")
		{
			if(edadIngresada>17)
			{
				contadorMayoresDeEdadViudos++;
			}
		}
		//c) La cantidad de hombres que hay solteros o viudos.
		if(sexoIngresado=="m")
		{
			switch(situacionSentimental)
			{
				case "soltero":
					contadorHombresSolteros++;
					acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edadIngresada;
					break;
				case "viudo":
					contadorHombresViudos++;
					break;
			}
		}
		//d) cantidad de abuelos con mas de 38 de temperatura
		if(edadIngresada>60)
		{
			if(temperaturaIngresada>38)
			{
				contadorMayoresConTemperatura++;
			}
		}
		
		
		respuesta=prompt("desea continuar?");
	}

	promedioEdadHombresSolteros=acumuladorEdadHombresSolteros/contadorHombresSolteros;

	console.log("nombre de la persona con mas temperatura:"+temperaturaMaximaNombre);

	if(contadorMayoresDeEdadViudos!=0)
	{
		console.log("mayores de edad que estan viudos:"+contadorMayoresDeEdadViudos);
	}else
	{
		console.log("no hay mayores de edad viudos");
	}

	if(contadorHombresSolteros!=0)
	{
		console.log("hombres que hay solteros: "+contadorHombresSolteros);
		console.log("promedio de edad entre los hombres solteros:"+promedioEdadHombresSolteros);
	}else
	{
		console.log("no hay hombres solteros");
	}

	if(contadorHombresViudos!=0)
	{
		console.log("hombres que hay viudos: "+contadorHombresViudos);
	}else
	{
		console.log("no hay hombres viudos");
	}

	if(contadorMayoresConTemperatura!=0)
	{
		console.log("personas de la tercera edad con mas de 38 de temperatura: "+contadorMayoresConTemperatura);
	}else
	{
		console.log("no hay personas de la tercera edad con mas de 38 de temperatura");
	}


	*/

}
