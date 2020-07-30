function mostrar()
{
	var estacionIngresada
	var destinoIngresado;
	var porcentajeCalculado;
	var precioBase;
	var precioFinal;
	var primerPorcentajeCalculado;
	var segundoPorcentajeCalculado;
	precioBase=15000;

	estacionIngresada= txtIdEstacion.value;
	alert(estacionIngresada);

	destinoIngresado=txtIdDestino.value;
	alert(destinoIngresado);

	primerPorcentajeCalculado=precioBase*10/100;//aca saco el 10% (por ciento)
	segundoPorcentajeCalculado=precioBase*20/100;//aca saco el 20% (por ciento)

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					precioFinal=precioBase+segundoPorcentajeCalculado;
					alert(precioFinal);
					break;
				case "Mar del plata":
					precioFinal=precioBase-segundoPorcentajeCalculado;
					alert(precioFinal);
					break;
				default:
					precioFinal=precioBase-primerPorcentajeCalculado;
					alert(precioFinal);
					break;
			}break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					precioFinal=precioBase-segundoPorcentajeCalculado;
					alert(precioFinal);
					break;
				case "Mar del plata":
					precioFinal=precioBase+segundoPorcentajeCalculado;
					alert(precioFinal);
					break;
				default:
					precioFinal=precioBase+primerPorcentajeCalculado;
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
					precioFinal=precioBase+primerPorcentajeCalculado;
					alert(precioFinal);
					break;	
			}break;	
	}
	

}//FIN DE LA FUNCIÓN