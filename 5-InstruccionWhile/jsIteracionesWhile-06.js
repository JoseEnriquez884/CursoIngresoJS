//Enriquez Jose
function mostrar()
{
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







	/*var contador;
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