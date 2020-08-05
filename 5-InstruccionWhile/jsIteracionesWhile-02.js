//Enriquez Jose
/*
a) Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un numero)
CantidadDeHijos(0 y 10)

1- edad mas vieja
2- nombre de la persona con edad mas vieja
3- cantidad de mujeres

4- de los hombres el mas viejo
5- de las mujeres la mas alta  
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
	
	contador=0;
	contadorDeMujeres=0;
	banderaPrimerHombre=0;
	
	while(contador<10)
	{
		//nombre
		nombreIngresado=prompt("ingrese nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("error, reingrese nombre");
		}

		//edad
		edadIngresada=prompt("ingrese edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0 || edadIngresada>115)
		{
			edadIngresada=prompt("error, reingrese edad");
			edadIngresada=parseInt(edadIngresada);
		}

		//altura
		alturaIngresada=prompt("ingrese altura");
		alturaIngresada=parseInt(alturaIngresada);
		while(isNaN(alturaIngresada)==true || alturaIngresada<30 || alturaIngresada>230)
		{
			alturaIngresada=prompt("error, reingrese altura");
			alturaIngresada=parseInt(alturaIngresada);
		}

		//sexo
		sexoIngresado=prompt("ingrese sexo");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("error, reingrese sexo");
		}

		//dinero
		dineroIngresado=prompt("ingrese dinero");
		dineroIngresado=parseInt(dineroIngresado);
		while(isNaN(dineroIngresado)==true)
		{
			dineroIngresado=prompt("error, reingrese dinero");
			dineroIngresado=parseInt(dineroIngresado);
		}

		//cantidad de hijos
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
		}else
		{
			if(edadIngresada>edadMasVieja)
			{
				edadMasVieja=edadIngresada;
				NombreDePersonaMayor=nombreIngresado;//punto 2
			}
		}

		if(sexoIngresado=="f")//punto 3
		{
			contadorDeMujeres=contadorDeMujeres+1;
			if(contadorDeMujeres==1)//punto 5
			{
				alturaDeMujerMasAlta=alturaIngresada;
				nombreMujerMasAlta=nombreIngresado;
			}else
			{
				alturaDeMujerMasAlta=alturaIngresada;
				nombreMujerMasAlta=nombreIngresado;
			}
		}else
		{
			if(banderaPrimerHombre==0)
			{
				banderaPrimerHombre=1;
				edadHombreMasViejo=edadIngresada;
				nombreHombreMasViejo=nombreIngresado;
			}else
			{
				if(edadIngresada>edadHombreMasViejo)
				{
					edadHombreMasViejo=edadIngresada;
					nombreHombreMasViejo=nombreIngresado;
				}
			}
		}
		

		contador=contador+1;
	}


	//document.write("nombre "+nombreIngresado);
	//document.write("<br>"+"edad "+edadIngresada);
	//document.write("<br>"+"altura "+alturaIngresada);
	//document.write("<br>"+"sexo "+sexoIngresado);
	//document.write("<br>"+"dinero "+dineroIngresado);
	//document.write("<br>"+"cantidad de hijos "+cantidadDeHijos);
	document.write("<br>"+"edad mas vieja "+edadMasVieja);
	document.write("<br>"+"cantidad de mujeres "+contadorDeMujeres);
	document.write("<br>"+"nombre de persona mas vieja "+NombreDePersonaMayor);
	document.write("<br>"+"hombre mas viejo "+nombreHombreMasViejo+edadHombreMasViejo);
	document.write("<br>"+"mujer mas alta "+nombreMujerMasAlta)







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