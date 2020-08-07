//Enriquez Jose
/*
a)”bandera a full”
de una cantidad de espectadores indeterminada debemos tomar lo siguiente datos
validados:
sexo
altura
edad
nombre
se debe informar:
1-el nombre de la más alta de las mujeres xx
2-el nombre del más viejo de los hombres
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si hay algún
adolescente)
*/
function mostrar()
{
	var respuesta;
	var sexoIngresado;
	var alturaIngresada;
	var edadIngresada;
	var nombreIngresado;
	var banderaDeLaMujerMasAlta;
	var alturaDeMujerMasAlta;
	var nombreDeMujerMasAlta;
	var banderaDelHombreMasViejo;
	var nombreDeHombreMasViejo;
	var edadDeHombreMasViejo;
	var banderaDelPrimerAdolescente;
	var nombreDePrimerAdolescente;
	var edadDePrimeroAdolescente;

	respuesta="si";
	banderaDeLaMujerMasAlta="es la primera";
	banderaDelHombreMasViejo="es el primero";
	banderaDelPrimerAdolescente="primer adolescente";

	while(respuesta=="si")
	{
		sexoIngresado=prompt("ingrese sexo");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("error, reingrese sexo valido");
		}
		
		alturaIngresada=prompt("ingrese altura");
		alturaIngresada=parseInt(alturaIngresada);
		while(isNaN(alturaIngresada)==true || alturaIngresada<1)
		{
			alturaIngresada=prompt("error, reingrese altura");
			alturaIngresada=parseInt(alturaIngresada);
		}

		edadIngresada=prompt("ingrese edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0)
		{
			edadIngresada=prompt("error, reingrese edad");
			edadIngresada=parseInt(edadIngresada);
		}

		nombreIngresado=prompt("ingrese nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("error, reingrese nombre");
		}

		//punto 1
		if(sexoIngresado=="f")
		{
			if(banderaDeLaMujerMasAlta=="es la primera")
			{
				banderaDeLaMujerMasAlta="ya paso";
				alturaDeMujerMasAlta=alturaIngresada;
				nombreDeMujerMasAlta=nombreIngresado;
			}else
			{
				if(alturaIngresada>alturaDeMujerMasAlta)
				{
					alturaDeMujerMasAlta=alturaIngresada;
					nombreDeMujerMasAlta=nombreIngresado;
				}
			}
		}else
		{		//punto 2
			if(banderaDelHombreMasViejo=="es el primero")
			{
				banderaDelHombreMasViejo="ya no es el primero";
				edadDeHombreMasViejo=edadIngresada;
				nombreDeHombreMasViejo=nombreIngresado;
			}else
			{
				if(edadIngresada>edadDeHombreMasViejo)
				{
					edadDeHombreMasViejo=edadIngresada;
					nombreDeHombreMasViejo=nombreIngresado;
				}
			}
		}

		//punto 3
		if(edadIngresada>12 && edadIngresada<18)
		{
			if(banderaDelPrimerAdolescente=="primer adolescente")
			{
				nombreDePrimerAdolescente=nombreIngresado;
				edadDePrimeroAdolescente=edadIngresada;
				banderaDelPrimerAdolescente="ya no es primero";
			}
		}

		respuesta=prompt("continua?");
	}
	
	//para que no aparezca undefined
	if(banderaDeLaMujerMasAlta!="es la primera")
	{
		console.log("la mujer mas alta se llama: "+nombreDeMujerMasAlta+" y mide: "+alturaDeMujerMasAlta);
	}else
	{
		console.log("no hay mujeres");
	}

	if(banderaDelHombreMasViejo!="es el primero")
	{
		console.log("el hombre mas viejo se llama "+nombreDeHombreMasViejo+" y tiene "+edadDeHombreMasViejo+" años");
	}else
	{
		console.log("no hay hombres");
	}

	if(banderaDelPrimerAdolescente!="primer adolescente")
	{
		console.log("el primer adolescente se llama "+nombreDePrimerAdolescente+" y tiene "+edadDePrimeroAdolescente+" años");
	}else
	{
		console.log("no hay adolescentes");
	}
	
	
	//console.log("la mujer mas alta se llama: "+nombreDeMujerMasAlta+" y mide: "+alturaDeMujerMasAlta);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	var numeroIngresado;

	numeroIngresado=prompt("ingrese numero entre 0 y 9");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado=prompt("no, ingresa un numero entre 0 y 9");

		numeroIngresado=parseInt(numeroIngresado);
	}
	
	txtIdNumero.value=numeroIngresado;
	*/
	
	
	
	
	
	
	/*var numeroIngresado;

	numeroIngresado=0;
		
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	
	while(numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado=prompt("ingrese un número entre 0 y 9.");
	}
	txtIdNumero.value=numeroIngresado;*/
	//document.write("<br>"+variable); otra forma de mostrar
	
}//FIN DE LA FUNCIÓN