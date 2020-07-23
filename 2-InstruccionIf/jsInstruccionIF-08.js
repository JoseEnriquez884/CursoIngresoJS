/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/
function mostrar()
{
	//tomo la edad
	//txtIdEdad
	//estadoCivil
	var edadIngresada;
	var situacionSentimental;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	situacionSentimental=estadoCivil.value;

	if(edadIngresada<18 && estadoCivil!="Soltero")
	{
		
	}
	else
	{
		if(situacionSentimental=="Soltero" && edadIngresada>17)
		{
			alert("Es soltero y no es menor");
		}
	}
}//FIN DE LA FUNCIÓN