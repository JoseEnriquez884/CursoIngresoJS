//Enriquez Jose
//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
function mostrar()
{
	//tomo la edad
	//txtIdEdad
	var edadIngresada;
	var situacionSentimental;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	situacionSentimental=estadoCivil.value;

	if(edadIngresada<18 && situacionSentimental!="Soltero")
	{
		alert("es muy pequeño para NO ser soltero");
	}
}//FIN DE LA FUNCIÓN