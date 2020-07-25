function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;

	estacionIngresada=txtIdEstacion.value;
	alert(estacionIngresada);

	destinoIngresado=txtIdDestino.value;
	alert(destinoIngresado);

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("se viaja");
					break;
				default:
					alert("no se viaja");
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("se viaja");
					break;
				default:
					alert("no se viaja");
					break;
			}
			break;
		case "Otoño":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					alert("se viaja");
					break;
			}
			break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("no se viaja");
					break;
				default:
					alert("se viaja");
					break;
			}
			break;
	}

}//FIN DE LA FUNCIÓN