function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{	
		case "Bariloche":
		case "Cordoba"://Ushuaia
			alert("hace frio");
			break;
		default:
			alert("hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN