//Enriquez Jose
//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
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