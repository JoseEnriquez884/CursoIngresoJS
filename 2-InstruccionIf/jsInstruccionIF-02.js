//Enriquez Jose
//Al ingresar una edad debemos informar solo si la persona es mayor de edad
function mostrar()
{
	//tomo la edad  
	var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("es mayor de edad");
	}
}//FIN DE LA FUNCIÓN