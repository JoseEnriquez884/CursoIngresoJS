function mostrar()
{
	//tomo la edad
	//txtIdEdad
	var edadIngresada;
	var estado;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estado=estadoCivil.value;

	if(edadIngresada<18 && estado!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
}//FIN DE LA FUNCIÓN