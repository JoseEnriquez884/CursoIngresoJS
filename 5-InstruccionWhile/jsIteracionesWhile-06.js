//Enriquez Jose
/*
c)”mixing bandera”
de una cantidad de animales indeterminada del zoológico debemos tomar los siguientes
datos validados:
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:
1-el promedio de edad total xx
2-la raza del más pesado xx
3-la temperatura máxima ingresada de los animales en extinción
*/
function mostrar()
{
	var razaIngresada;
	var pesoIngresado;
	var temperaturaIngresada;
	var edadIngresada;
	var situacionDelAnimal;
	var respuesta;
	var contadorDeAnimales;
	var sumadorDeEdadesDeAnimales;
	var promedioDeEdades;
	var pesoDelMasPesado;
	var razaDelMasPesado;
	var banderaDePrimerTemperatura;
	var temperaturaMaxima;

	respuesta="si";
	contadorDeAnimales=0;
	sumadorDeEdadesDeAnimales=0;
	banderaDePrimerTemperatura="es la primera"

	while(respuesta=="si")
	{
		razaIngresada=prompt("ingrese raza");
		while(isNaN(razaIngresada)==false)
		{
			razaIngresada=prompt("error, ingrese raza");
		}

		pesoIngresado=prompt("ingrese peso");
		pesoIngresado=parseInt(pesoIngresado);
		while(isNaN(pesoIngresado)==true)
		{
			pesoIngresado=prompt("error, ingrese peso");
			pesoIngresado=parseInt(pesoIngresado);
		}

		temperaturaIngresada=prompt("ingrese temperatura");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true)
		{
			temperaturaIngresada=prompt("error, ingrese temperatura");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}

		edadIngresada=prompt("ingrese edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true)
		{
			edadIngresada=prompt("error, ingrese edad");
			edadIngresada=parseInt(edadIngresada);
		}

		situacionDelAnimal=prompt("esta en peligro de extincion?");
		while(isNaN(situacionDelAnimal)==false || situacionDelAnimal!="si" && situacionDelAnimal!="no")
		{
			situacionDelAnimal=prompt("error, ingrese respuesta valida");
		}

		//punto 1 
		contadorDeAnimales++;
		sumadorDeEdadesDeAnimales=sumadorDeEdadesDeAnimales+edadIngresada;

		//punto 2
		if(contadorDeAnimales==1)
		{
			pesoDelMasPesado=pesoIngresado;
			razaDelMasPesado=razaIngresada;
		}else
		{
			if(pesoIngresado>pesoDelMasPesado)
			{
				pesoDelMasPesado=pesoIngresado;
				razaDelMasPesado=razaIngresada;
			}
		}

		//punto 3
		if(situacionDelAnimal=="si")
		{
			if(banderaDePrimerTemperatura=="es la primera")
			{
				banderaDePrimerTemperatura="ya no es";
				temperaturaMaxima=temperaturaIngresada;
			}else
			{
				if(temperaturaIngresada>temperaturaMaxima)
				{
					temperaturaMaxima=temperaturaIngresada;
				}
			}
		}
		respuesta=prompt("continua?");
	}
	
	promedioDeEdades=sumadorDeEdadesDeAnimales/contadorDeAnimales;

	if(contadorDeAnimales!=0)
	{
		console.log("el promedio de edad total de animales es de: "+promedioDeEdades);
		console.log("la raza del mas pesado es: "+razaDelMasPesado+" y pesa: "+pesoDelMasPesado+" kilos");
	}else
	{
		console.log("no hay mas pesado");
	}
	
	console.log("la temperatura maxima es de: "+temperaturaMaxima);
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	var numeroIngresado;
	var contador;
	var acumulador;
	var promedio;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
	}
	
	promedio=acumulador/contador;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;







	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
	}
	
	promedio=acumulador/contador;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;*/
}//FIN DE LA FUNCIÓN