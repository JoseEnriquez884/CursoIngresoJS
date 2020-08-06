//Enriquez Jose
/*
a) Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un numero)
CantidadDeHijos(0 y 10)

1- edad mas vieja xx
2- nombre de la persona con edad mas vieja xx
3- cantidad de mujeres xx

4- de los hombres el mas viejo xx
5- de las mujeres la mas alta  xx

6- la altura del hombre mas viejo xx
7- el nombre y sexo de la persona con mas dinero xx
8- cantidad de personas con dinero menor a cero xx
9- promedio de edad de las mujeres xx
*/
function mostrar()
{
	var contador;
	var nombreIngresado;
	var edadIngresada;
	var alturaIngresada;
	var sexoIngresado;
	var dineroIngresado;
	var cantidadDeHijos;
	var edadMasVieja;
	var NombreDePersonaMayor;
	var contadorDeMujeres;
	var edadHombreMasViejo;
	var nombreHombreMasViejo;
	var nombreMujerMasAlta;
	var alturaDeMujerMasAlta;
	var banderaPrimerHombre;
	var alturaDeHombreMasViejo;
	var dineroMaximo;
	var nombreDePersonaConMasDinero;
	var sexoDePersonaConMasDinero;
	var cantidadDePersonasConDineroNegativo;
	var sumadorDeEdadesDeMujeres;
	var promedioDeEdadDeMujeres;
	
	//contadores
	contador=0;
	contadorDeMujeres=0;
	banderaPrimerHombre=0;
	cantidadDePersonasConDineroNegativo=0;
	sumadorDeEdadesDeMujeres=0;
	
	while(contador<6)
	{
		//nombre validado
		nombreIngresado=prompt("ingrese nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("error, reingrese nombre");
		}

		//edad	validada
		edadIngresada=prompt("ingrese edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0 || edadIngresada>115)
		{
			edadIngresada=prompt("error, reingrese edad");
			edadIngresada=parseInt(edadIngresada);
		}

		//altura validada
		alturaIngresada=prompt("ingrese altura");
		alturaIngresada=parseInt(alturaIngresada);
		while(isNaN(alturaIngresada)==true || alturaIngresada<30 || alturaIngresada>230)
		{
			alturaIngresada=prompt("error, reingrese altura");
			alturaIngresada=parseInt(alturaIngresada);
		}

		//sexo validado
		sexoIngresado=prompt("ingrese sexo");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("error, reingrese sexo");
		}

		//dinero validado
		dineroIngresado=prompt("ingrese dinero");
		dineroIngresado=parseInt(dineroIngresado);
		while(isNaN(dineroIngresado)==true)
		{
			dineroIngresado=prompt("error, reingrese dinero");
			dineroIngresado=parseInt(dineroIngresado);
		}

		//cantidad de hijos validada
		cantidadDeHijos=prompt("cuantos hijos tiene?");
		cantidadDeHijos=parseInt(cantidadDeHijos);
		while(isNaN(cantidadDeHijos)==true || cantidadDeHijos<0 || cantidadDeHijos>10)
		{
			cantidadDeHijos=prompt("error, ingrese cantidad valida");
			cantidadDeHijos=parseInt(cantidadDeHijos);
		}
		
		if(contador==0)//punto 1
		{
			edadMasVieja=edadIngresada;
			NombreDePersonaMayor=nombreIngresado;//punto 2
			dineroMaximo=dineroIngresado;
			nombreDePersonaConMasDinero=nombreIngresado;
			sexoDePersonaConMasDinero=sexoIngresado;
		}else
		{
			if(edadIngresada>edadMasVieja)
			{
				edadMasVieja=edadIngresada;
				NombreDePersonaMayor=nombreIngresado;//punto 2
			}
			if(dineroIngresado>dineroMaximo)
			{
				dineroMaximo=dineroIngresado;
				nombreDePersonaConMasDinero=nombreIngresado;
				sexoDePersonaConMasDinero=sexoIngresado;
			}else
			{
				if(dineroIngresado<0)
				{
					cantidadDePersonasConDineroNegativo=cantidadDePersonasConDineroNegativo+1;
				}
			}
		}

		if(sexoIngresado=="f")//punto 3
		{
			contadorDeMujeres=contadorDeMujeres+1;
			sumadorDeEdadesDeMujeres=sumadorDeEdadesDeMujeres+edadIngresada;
			if(contadorDeMujeres==1)
			{
				alturaDeMujerMasAlta=alturaIngresada;//punto 5
				nombreMujerMasAlta=nombreIngresado;
			}else
			{
				if(alturaIngresada>alturaDeMujerMasAlta)
				{
					alturaDeMujerMasAlta=alturaIngresada;
					nombreMujerMasAlta=nombreIngresado;
				}				
			}
		}else
		{
			if(banderaPrimerHombre==0)
			{
				banderaPrimerHombre=1;
				edadHombreMasViejo=edadIngresada;
				nombreHombreMasViejo=nombreIngresado;
				//punto 6
				alturaDeHombreMasViejo=alturaIngresada;//esto no se si esta bien
			}else
			{
				if(edadIngresada>edadHombreMasViejo)
				{
					edadHombreMasViejo=edadIngresada;
					nombreHombreMasViejo=nombreIngresado;
					//punto 6
					alturaDeHombreMasViejo=alturaIngresada;//esto no se si esta bien
				}
			}
		}
		

		contador=contador+1;
	}

	promedioDeEdadDeMujeres=sumadorDeEdadesDeMujeres/contadorDeMujeres;

	//document.write("nombre "+nombreIngresado);
	//document.write("<br>"+"edad "+edadIngresada);
	//document.write("<br>"+"altura "+alturaIngresada);
	//document.write("<br>"+"sexo "+sexoIngresado);
	//document.write("<br>"+"dinero "+dineroIngresado);
	//document.write("<br>"+"cantidad de hijos "+cantidadDeHijos);
	document.write("<br>"+"La edad mas vieja es: "+edadMasVieja);
	document.write("<br>"+"Hay "+contadorDeMujeres+" mujeres");
	document.write("<br>"+"El nombre de la persona mas vieja es: "+NombreDePersonaMayor);
	document.write("<br>"+"El hombre mas viejo se llama "+nombreHombreMasViejo+" y tiene "+edadHombreMasViejo+" años");
	document.write("<br>"+"La mujer mas alta se llama "+nombreMujerMasAlta+" y mide "+alturaDeMujerMasAlta);
	document.write("<br>"+"El hombre mas viejo mide "+alturaDeHombreMasViejo);
	document.write("<br>"+"La persona con mas dinero se llama "+nombreDePersonaConMasDinero+", tiene $"+dineroMaximo+" y su sexo es "+sexoDePersonaConMasDinero);
	document.write("<br>"+"Hay "+cantidadDePersonasConDineroNegativo+" personas con dinero negativo");
	document.write("<br>"+"El promedio de edades de mujeres es "+promedioDeEdadDeMujeres);




	/*
	var numero;
	numero=10;
	while(numero>0)
	{
		console.log(numero);
		numero=numero-1;
	}
	*/
	
	
	
	
	
	
	
	/*var contador;
	contador=10; 
	while(contador>0)
	{
		alert(contador);
		contador=contador-1;
	}*/
	

}//FIN DE LA FUNCIÓN