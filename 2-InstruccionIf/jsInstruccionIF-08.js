//Enriquez Jose
/*Se pide ingresar una edad y un estado civil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores" 
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado "sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
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

	if(edadIngresada<18)
	{
		alert("respeta a tus mayores");
		alert("hagan la tarea");
		if(situacionSentimental!="Soltero" && edadIngresada>12)
		{
			alert("sos muy joven para no ser soltero");
		}
	}else
	{
		if(edadIngresada>17 && edadIngresada<61)
		{
			alert("se responsable");
			if(situacionSentimental=="Soltero")
			{
				alert("a vivir la vida");
			}else
			{
				if(situacionSentimental=="Casado")
				{
					alert("a disfrutar la pareja");
				}else
				{
					alert("a intentarlo nuevamente");
				}
			}
		}else
		{
			alert("sos persona de riesgo");
		}
	}

	
	
	
	
	
	
	
	
	/*if(edadIngresada<13)
	{
		alert("hagan la tarea");
	}
	else
	{
		if(edadIngresada>12 && edadIngresada<18)
		{
			alert("respeta a tus mayores");
			if(situacionSentimental!="Soltero")
			{
				alert("sos muy joven para no ser soltero");
			}
		}
		else
		{
			if(edadIngresada>17 && edadIngresada<61)
			{
				alert("se responsable");
				if(situacionSentimental=="Soltero")
				{
					alert("a vivir la vida");
				}
				else
				{
					if(situacionSentimental=="Casado")
					{
						alert("a disfrutar la pareja");
					}
				}
			}
			else
			{
				alert("sos persona de riesgo");
			}
			if(situacionSentimental=="Divorciado")
			{
				alert("a intentarlo nuevamente");
			}
		}	
	}*/
}//FIN DE LA FUNCIÓN