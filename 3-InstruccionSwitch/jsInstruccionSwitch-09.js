function mostrar()
{
	var estacionIngresada
	var destinoIngresado;
	var porcentaje;
	var precioBase;
	var precioFinal;
	precioBase=15000;

	estacionIngresada= txtIdEstacion.value;
	alert(estacionIngresada);

	destinoIngresado=txtIdDestino.value;
	alert(destinoIngresado);

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=precioBase*20/100;
					precioFinal=precioBase+porcentaje;
					alert(precioFinal);
					break;
				case "Mar del plata":
					porcentaje=precioBase*20/100;
					precioFinal=precioBase-porcentaje;
					alert(precioFinal);
					break;
				default:
					porcentaje=precioBase*10/100;
					precioFinal=precioBase-porcentaje;
					alert(precioFinal);
					break;
			}break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=precioBase*20/100;
					precioFinal=precioBase-porcentaje;
					alert(precioFinal);
					break;
				case "Mar del plata":
					porcentaje=precioBase*20/100;
					precioFinal=precioBase+porcentaje;
					alert(precioFinal);
					break;
				default:
					porcentaje=precioBase*10/100;
					precioFinal=precioBase+porcentaje;
					alert(precioFinal);
					break;
			}break;
		default:
			switch(destinoIngresado)
			{
				case "Cordoba":
					alert(precioBase);
					break;
				default:
					porcentaje=precioBase*10/100;
					precioFinal=precioBase+porcentaje;
					alert(precioFinal);
					break;	
			}break;	
	}


}//FIN DE LA FUNCIÓN