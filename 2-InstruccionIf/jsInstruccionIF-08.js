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

	//-------AGREGADO A con SWITCH

	switch(edadIngresada)
	{
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
			alert("hagan la tarea");
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
			alert("respeta a tus mayores");
		switch(situacionSentimental)
		{
			case "Casado":
			case "Divorciado":
				alert("sos muy joven para no ser soltero");
				break;
		}
			break;
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 30:
		case 31:
		case 32:
		case 33:
		case 34:
		case 35:
		case 36:
		case 37:
		case 38:
		case 39:
		case 40:
		case 41:
		case 42:
		case 43:
		case 44:
		case 45:
		case 46:
		case 47:
		case 48:
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57:
		case 58:
		case 59:
		case 60:
			alert("se responsable");
		switch(situacionSentimental)
		{
			case "Soltero":
				alert("a vivir la vida");
				break;
			case "Casado":
				alert("a disfrutar la pareja");
				break;
		}
			break;
		default:
			alert("se responsable");
			alert("sos persona de riesgo");
			break;
	}
	switch(situacionSentimental)
	{
		case "Divorciado":
			alert("a intentarlo nuevamente");
			break;
	}
	
	
	
	
	//-----AGREGADO A con IF ELSE--------
	
	/*
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
	}*/
}//FIN DE LA FUNCIÓN