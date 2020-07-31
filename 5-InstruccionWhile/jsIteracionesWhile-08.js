//Enriquez Jose
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaDePositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	contador=0;
	sumaDePositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=='si')
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			sumaDePositivos=sumaDePositivos+numeroIngresado;
		}else
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
		}

		respuesta=prompt("sigue?");
	}
	
	txtIdSuma.value=sumaDePositivos;
	txtIdProducto.value=multiplicacionNegativos;
	
	
	
	
	
	/*var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=='si')
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}else
		{
			if(numeroIngresado<0)
			{
				multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
			}
		}
		respuesta=prompt("sigue?");
	}
	
	
	
	
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;*/
	
}//FIN DE LA FUNCIÓN