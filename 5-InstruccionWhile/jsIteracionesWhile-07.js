//Enriquez Jose
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var respuesta;
	var promedio;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=='si')
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("sigue?");
	}
	
	promedio=acumulador/contador;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
	
	
	
	
	
	
	
	
	/*var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=='si')
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("desea continuar?");
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;*/

}//FIN DE LA FUNCIÓN