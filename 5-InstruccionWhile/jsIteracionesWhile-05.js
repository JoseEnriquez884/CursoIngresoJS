//Enriquez Jose
/*
b)”sin banderas”
Se debe ingresar 10 personas con sus datos validados:
nombre
edad(0 y 115)xx
altura(30 y 230)xx
sexo xx
Dinero(puede ser positivo o negativo, pero debe ser un número) xx
CantidadDeHijos(0 y 10) xx
se debe informar:
1- nombre de la persona con edad más vieja xx
2- promedio de altura de las mujeres xx
3- nombre de la mujer más joven xx
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
	var nombreDePersonaMasVieja;
	var edadDePersonaMasVieja;
	var contadorDeMujeres;
	var sumadorDeAlturaDeMujeres;
	var promedioDeAlturaDeMujeres;
	var edadDeMujerMasJoven;
	var nombreDeMujerMasJoven;

	contador=0;	
	contadorDeMujeres=0;
	sumadorDeAlturaDeMujeres=0;
	

	while(contador<4)
	{
		nombreIngresado=prompt("ingrese nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("error, reingrese nombre");
		}

		edadIngresada=prompt("ingrese edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0 || edadIngresada>115)
		{
			edadIngresada=prompt("error, reingrese edad");
			edadIngresada=parseInt(edadIngresada);
		}

		alturaIngresada=prompt("ingrese altura");
		alturaIngresada=parseInt(alturaIngresada);
		while(isNaN(alturaIngresada)==true || alturaIngresada<30 || alturaIngresada>230)
		{
			alturaIngresada=prompt("error, reingrese altura");
			alturaIngresada=parseInt(alturaIngresada);
		}

		sexoIngresado=prompt("ingrese sexo");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("error, reingrese sexo");
		}
		
		dineroIngresado=prompt("ingrese dinero");
		dineroIngresado=parseInt(dineroIngresado);
		while(isNaN(dineroIngresado)==true)
		{
			dineroIngresado=prompt("error, reingrese dinero");
			dineroIngresado=parseInt(dineroIngresado);
		}

		cantidadDeHijos=prompt("ingrese cantidad de hijos");
		cantidadDeHijos=parseInt(cantidadDeHijos);
		while(isNaN(cantidadDeHijos)==true || cantidadDeHijos<0 || cantidadDeHijos>10)
		{
			cantidadDeHijos=prompt("error, reingrese cantidad de hijos");
			cantidadDeHijos=parseInt(cantidadDeHijos);
		}

		//punto 1
		if(contador==0)
		{
			edadDePersonaMasVieja=edadIngresada;
			nombreDePersonaMasVieja=nombreIngresado;
		}else
		{
			if(edadIngresada>edadDePersonaMasVieja)
			{
				edadDePersonaMasVieja=edadIngresada;
				nombreDePersonaMasVieja=nombreIngresado;
			}
		}

		//punto 2
		if(sexoIngresado=="f")
		{
			contadorDeMujeres=contadorDeMujeres+1;
			sumadorDeAlturaDeMujeres=sumadorDeAlturaDeMujeres+alturaIngresada;
			if(contadorDeMujeres==1)
			{
				edadDeMujerMasJoven=edadIngresada;
				nombreDeMujerMasJoven=nombreIngresado;
			}else
			{
				if(edadIngresada<edadDeMujerMasJoven)
				{
					edadDeMujerMasJoven=edadIngresada;
					nombreDeMujerMasJoven=nombreIngresado;
				}
			}
		}
		
		contador=contador+1;
	}

	promedioDeAlturaDeMujeres=sumadorDeAlturaDeMujeres/contadorDeMujeres;


	if(contador!=0)//edad mas vieja
	{
		console.log("la persona mas vieja se llama "+nombreDePersonaMasVieja+" y tiene "+edadDePersonaMasVieja+" años");
	}else
	{
		console.log("no hay persona mas vieja")
	}


	if(contadorDeMujeres!=0)
	{
		console.log("el promedio de altura de mujeres es de: "+promedioDeAlturaDeMujeres);
		console.log("la mujer mas joven se llama "+nombreDeMujerMasJoven+" y tiene "+edadDeMujerMasJoven+" años");
	}else
	{
		console.log("no hay mujeres");
	}
















	/*
	var sexoIngresado;
	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado=prompt("Ingrese sexo valido");
	}
	
	txtIdSexo.value=sexoIngresado;
	
	
	
	
	
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado=prompt("error, ingrese f ó m .");
	}
	txtIdSexo.value=sexoIngresado;*/
}//FIN DE LA FUNCIÓN