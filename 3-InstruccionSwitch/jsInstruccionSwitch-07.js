function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("oeste");
			break;
		case "Cataratas":
			alert("norte");
			break;
		case "Mar del plata":
			alert("este");
			break;
		case "Cordoba"://Ushuaia
			alert("sur");
			break;		
	}

}//FIN DE LA FUNCIÓN