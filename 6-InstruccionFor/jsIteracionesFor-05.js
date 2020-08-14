function mostrar()
{
	var numeroIngresado;

	for(;;)
	{
		numeroIngresado=prompt("ingrese numero correcto");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado==9)
		{
			break;
		}

		console.log(numeroIngresado);
	}

	



}//FIN DE LA FUNCIÓN