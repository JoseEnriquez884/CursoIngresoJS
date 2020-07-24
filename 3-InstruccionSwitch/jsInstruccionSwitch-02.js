function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!");
			break;
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
			alert("Abrigate que hace frio.");
			break;
		default:
			alert("Falta para el invierno.");
			break;									
	}




}//FIN DE LA FUNCIÓN