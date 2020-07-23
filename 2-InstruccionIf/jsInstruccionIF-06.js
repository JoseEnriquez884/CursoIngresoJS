function mostrar()
{
	//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).  
	var edadIngresada;

	edadIngresada=txtIdEdad.value;

	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<13)
	{
		alert("Niño");
	}
	else
	{
		if(edadIngresada>17)
		{
			alert("Mayor");
		}
		else
		{
			alert("Adolescente");
		}
	}
}//FIN DE LA FUNCIÓN