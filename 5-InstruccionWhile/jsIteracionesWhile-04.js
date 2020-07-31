/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado=prompt("ingrese numero entre 0 y 9");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado=prompt("no, ingresa un numero entre 0 y 9");

		numeroIngresado=parseInt(numeroIngresado);
	}
	
	txtIdNumero.value=numeroIngresado;
	
	
	
	
	
	
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