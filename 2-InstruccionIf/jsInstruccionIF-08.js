//Enriquez Jose
/*Se pide ingresar una edad y un estado civil
	**a todos los mayores de edad, mostrar el mensaje "se responsable"
	**a todos los menores de edad, mostrar el mensaje "respeta a tus mayores" 
	**a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	**a los niños tambien informar "hagan la tarea" 
	**a los adolescentes casado o Divorciado "sos muy joven para no ser soltero"
	**a los mayores de edad solteros, tambien informar "a vivir la vida"
	**a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

*/

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

	if(edadIngresada<18)//menores de edad
	{
		alert("respeta a tus mayores");
		if(situacionSentimental!="Soltero" && edadIngresada>12)
		{
			alert("sos muy joven para no ser soltero");
		}
		if(edadIngresada<13)//niños
		{
			alert("hagan la tarea");
		}
	}else
	{
		if(edadIngresada>17)//mayores de edad
		{
			alert("se responsable");
			if(edadIngresada>60)//adultos mayores
			{
				alert("sos persona de riesgo");
			}
			if(situacionSentimental=="Soltero")
			{
				alert("a vivir la vida");
			}else
			{
				if(situacionSentimental=="Casado")
				{
					alert("a disfrutar la pareja");
				}
			}
		}
	}
	if(situacionSentimental=="Divorciado")
	{
		alert("a intentarlo nuevamente");
	}
}//FIN DE LA FUNCIÓN