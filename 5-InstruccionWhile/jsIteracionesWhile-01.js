//Enriquez Jose
/*
Agregado while

Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 1:
cuantos son en total xx
cuantos mayores de edad xx
cuantos menores de edad xx
cuantos adolescentes de edad xx
la edad mas vieja; xx
la edad mas joven; xx

nivel:2

cuantas mujeres; xx
cuantos hombres; xx
cuantas adolescentes mujeres xx
cuantos niños hombres xx
el promedio de edad xx
el promedio de edad de las mujeres xx
el promedio de edad de los hombres xx
la cantidad de edades pares xx

nivel 3:

el nombre de la persona mas vieja xx
el nombre de la persona mas joven xx

el sexo de la persona mas vieja xx
el sexo de la persona mas joven xx

nivel dios:

cuantas personas hay con la edad minima xx
cuantas personas hay con la edad maxima xx
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
	var contadorDeMujeres;
	var contadorDeHombres;
	var contadorMujeresAdolescentes;
	var cantidadNiñosHombres;
	var sumadorDeEdades;
	var promedioDeEdades;
	var sumadorDeEdadMujeres;
	var promedioEdadMujeres;
	var sumadorDeEdadHombres;
	var promedioEdadHombres;
	var cantidadEdadesPares;
	var nombreDelMasViejo;
	var nombrePersonaMasJoven;
	var sexoPersonaMasVieja;
	var sexoPersonaMasJoven;
	var contadorPersonasEdadMax;
	var contadorPersonasEdadMin;
	var nombreUltimaPersonaMayor;
	var nombreUltimaPersonaMenor;

	contadorDePersonas=0;
	contadorMayoresDeEdad=0;
	contadorMenoresDeEdad=0;
	contadorDeAdolescentes=0;
	contadorDeHombres=0;
	contadorDeMujeres=0;
	contadorMujeresAdolescentes=0;
	cantidadNiñosHombres=0;
	sumadorDeEdades=0;
	sumadorDeEdadMujeres=0;
	sumadorDeEdadHombres=0;
	cantidadEdadesPares=0;
	contadorPersonasEdadMax=0;
	contadorPersonasEdadMin=0;
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
		if(edadIngresada%2==0)//cantidad de edades pares
		{
			cantidadEdadesPares=cantidadEdadesPares+1;
		}
		sumadorDeEdades=sumadorDeEdades+edadIngresada;
		promedioDeEdades=sumadorDeEdades/contadorDePersonas;

		sexoIngresado=prompt("ingrese sexo");
		while(sexoIngresado!="f" && sexoIngresado!="m")//sexo validado
		{
			sexoIngresado=prompt("error, ingrese sexo valido");
		}
		if(sexoIngresado=="f")
		{
			contadorDeMujeres=contadorDeMujeres+1;
			sumadorDeEdadMujeres=sumadorDeEdadMujeres+edadIngresada;
			if(edadIngresada>12 && edadIngresada<18)
			{
				contadorMujeresAdolescentes=contadorMujeresAdolescentes+1;
			}
		}else
		{
			if(sexoIngresado=="m")
			{
				contadorDeHombres=contadorDeHombres+1;
				sumadorDeEdadHombres=sumadorDeEdadHombres+edadIngresada;
				if(edadIngresada<13)
				{
					cantidadNiñosHombres=cantidadNiñosHombres+1;
				}
			}
		}
		if(BanderaDePrimeraEdad=="es la primera")
		{
			edadMasJoven=edadIngresada;
			edadMasVieja=edadIngresada;
			nombrePersonaMasJoven=nombreIngresado;
			sexoPersonaMasJoven=sexoIngresado;
			contadorPersonasEdadMin=contadorPersonasEdadMin+1;
			contadorPersonasEdadMax=contadorPersonasEdadMax+1;
			BanderaDePrimeraEdad="ya paso";
		}else
		{
			if(edadIngresada>edadMasVieja)
			{
				edadMasVieja=edadIngresada;
				nombreDelMasViejo=nombreIngresado;
				sexoPersonaMasVieja=sexoIngresado;
				contadorPersonasEdadMax=contadorPersonasEdadMax+1;
				nombreUltimaPersonaMayor=nombreIngresado;
			}else
			{
				if(edadIngresada<edadMasJoven)
				{
					edadMasJoven=edadIngresada;
					contadorPersonasEdadMin=contadorPersonasEdadMin+1;
					//nombrePersonaMasJoven=nombreIngresado;
					//sexoPersonaMasJoven=sexoIngresado;
				}
			}
		}
		promedioEdadMujeres=sumadorDeEdadMujeres/contadorDeMujeres;
		promedioEdadHombres=sumadorDeEdadHombres/contadorDeHombres;

		respuesta=prompt("desea continuar");
	}
	
	console.log("nombre "+nombreIngresado);
	console.log("hay "+contadorDePersonas+" personas");
	console.log("menores de edad "+contadorMenoresDeEdad);
	console.log("adolescentes "+contadorDeAdolescentes);
	console.log("mayores "+contadorMayoresDeEdad);
	console.log("edad mas joven "+edadMasJoven);
	console.log("edad mas vieja "+edadMasVieja);
	console.log("cantidad Mujeres "+contadorDeMujeres);
	console.log("cantidad Hombres "+contadorDeHombres);
	console.log("cantidad mujeres adolescentes "+contadorMujeresAdolescentes);
	console.log("cantidad niños hombres "+cantidadNiñosHombres);
	console.log("promedio de edades "+promedioDeEdades);
	console.log("promedio de edad mujeres "+promedioEdadMujeres);
	console.log("promedio de edad hombres "+promedioEdadHombres);
	console.log("cantidad edades pares "+cantidadEdadesPares);	
	console.log("nombre del mas viejo "+nombreDelMasViejo);
	console.log("nombre del mas joven "+nombrePersonaMasJoven);
	console.log("sexo de la mas vieja "+sexoPersonaMasVieja);
	console.log("sexo de la mas joven "+sexoPersonaMasJoven);
	console.log("cantidad personas con edad maxima "+contadorPersonasEdadMax);
	console.log("cantidad personas con edad minima "+contadorPersonasEdadMin);
	console.log("ultima persona mayor "+nombreUltimaPersonaMayor);
	
	
	
	
	
	
	
	
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