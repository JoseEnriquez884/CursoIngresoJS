//Enriquez Jose
/*
Agregado while

Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 1:
cuantos son en total 
cuantos mayores de edad 
cuantos menores de edad 
cuantos adolescentes de edad 
la edad mas vieja;
la edad mas joven;

nivel:2

cuantas mujeres;
cuantos hombres;
cuantas adolescentes mujeres 
cuantos niños hombres 
el promedio de edad
el promedio de edad de las mujeres
el promedio de edad de los hombres
la cantidad de edades pares 

nivel 3:


el nombre de la persona mas vieja
el nombre de la persona mas joven

el sexo de la persona mas vieja
el sexo de la persona mas joven

nivel dios:

cuantas personas hay con la edad minima
cuantas personas hay con la edad maxima
el nombre de la ultima persona con la mayor edad encontrada
el nombre de la ultima persona con la menor edad encontrada

*/
function mostrar()
{
	var edadIngresada;
	var nombreIngresado;
	var sexoIngresado;
	var respuesta;
	var contadorDePersonas;
	var contadorMayoresDeEdad;
	var contadorMenoresDeEdad;
	var contadorDeAdolescentes;
	var BanderaDePrimeraEdad;
	var edadMasVieja;
	var edadMasJoven;

	contadorDePersonas=0;
	contadorMayoresDeEdad=0;
	contadorMenoresDeEdad=0;
	contadorDeAdolescentes=0;
	BanderaDePrimeraEdad="es la primera";
	respuesta="si";

	while(respuesta=="si")
	{
		contadorDePersonas=contadorDePersonas+1;
		nombreIngresado=prompt("ingrese nombre");

		edadIngresada=prompt("ingrese edad");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<0 || edadIngresada>120)
		{
			edadIngresada=prompt("error, ingrese una edad valida");
			edadIngresada=parseInt(edadIngresada);
		}
		//contadores de edad
		if(edadIngresada>17)
		{
			contadorMayoresDeEdad=contadorMayoresDeEdad+1
		}else
		{
			if(edadIngresada>12)
			{
				contadorDeAdolescentes=contadorDeAdolescentes+1;
			}else
			{
				contadorMenoresDeEdad=contadorMenoresDeEdad+1;
			}
		}
		//edad mas vieja y edad mas joven
		if(BanderaDePrimeraEdad=="es la primera")
		{
			edadMasJoven=edadIngresada;
			edadMasVieja=edadIngresada;
			BanderaDePrimeraEdad="ya paso";
		}else
		{
			if(edadIngresada>edadMasVieja)
			{
				edadMasVieja=edadIngresada;
			}
			if(edadIngresada<edadMasJoven)
			{
				edadMasJoven=edadIngresada;
			}
		}

		sexoIngresado=prompt("ingrese sexo");
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("error, ingrese sexo valido");
		}



		respuesta=prompt("desea continuar");
	}
	
	console.log("nombre "+nombreIngresado);
	console.log("hay "+contadorDePersonas+" personas");
	console.log("menores de edad "+contadorMenoresDeEdad);
	console.log("adolescentes "+contadorDeAdolescentes);
	console.log("mayores "+contadorMayoresDeEdad);
	console.log("edad mas joven "+edadMasJoven);
	console.log("edad mas vieja "+edadMasVieja);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*var numero;
	numero=0;//1era parte, una variable que me permita ingresar al while
	while(numero<10)//2da parte, la logica
	{
		numero=numero+1;//3era parte, modificar el valor para la logica
		console.log(numero);
	}*/
	
	/*
	numero=numero+1 es lo mismo que numero++
	numero=numero-1 es lo mismo que numero--

	NUNCA PERO NUNCA PONER: 
	numero=numero++ o numero=numero--
	*/
}//FIN DE LA FUNCIÓN