//Enriquez Jose
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var contadorDePositivos=0;
	var contadorDeNegativos=0;
	var contadorDeCeros=0;
	var contadorDeNumerosPares=0;
	var promedioDePositivos;
	var promedioDeNegativos;
	var diferenciaDePositivosYNegativos;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0)//negativos
		{
			contadorDeNegativos=contadorDeNegativos+1;
			sumaNegativos=sumaNegativos+numeroIngresado;
			//promedioDeNegativos=sumaNegativos/contadorDeNegativos;
		}else
		{
			if(numeroIngresado>0)//positivos
			{
				contadorDePositivos=contadorDePositivos+1;
				sumaPositivos=sumaPositivos+numeroIngresado;
				if(numeroIngresado%2==0)//cantidad de pares
				{
					contadorDeNumerosPares=contadorDeNumerosPares+1;//contador de pares tiene que estar dentro del if que diga >0
				}
				//promedioDePositivos=sumaPositivos/contadorDePositivos;
				//diferenciaDePositivosYNegativos=sumaPositivos-sumaNegativos;
			}else
			{				
				if(numeroIngresado==0)//cantidad de ceros
				{
					contadorDeCeros=contadorDeCeros+1;
				}				
			}
		}
		respuesta=prompt("desea continuar?");
	}//fin del while

	promedioDeNegativos=sumaNegativos/contadorDeNegativos;
	promedioDePositivos=sumaPositivos/contadorDePositivos;
	diferenciaDePositivosYNegativos=sumaPositivos-sumaNegativos;



	document.write("La suma de negativos es :"+sumaNegativos);
	document.write("<br>"+"La suma de los positivos es:"+sumaPositivos);
	document.write("<br>"+"La cantidad de los positivos es:"+contadorDePositivos);
	document.write("<br>"+"La cantidad de los negativos es:"+contadorDeNegativos);
	document.write("<br>"+"La cantidad de los ceros es:"+contadorDeCeros);
	document.write("<br>"+"La cantidad de los pares es:"+contadorDeNumerosPares);
	document.write("<br>"+"El promedio de los positivos es:"+promedioDePositivos);
	document.write("<br>"+"El promedio de los negativos es:"+promedioDeNegativos);
	document.write("<br>"+"La diferencia entre positivos y negativos es:"+diferenciaDePositivosYNegativos);
	//document.write("<br>"+variable); otra forma de mostrar
}//FIN DE LA FUNCIÓN