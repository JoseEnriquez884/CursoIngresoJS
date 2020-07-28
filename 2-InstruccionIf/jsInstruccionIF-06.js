function mostrar()
{
	//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).  
	var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("mayor de edad");
	}else
	{
		if(edadIngresada>12)
		{
			alert("adolescente");
		}else
		{
			alert("niño");
		}
	}
}//FIN DE LA FUNCIÓN