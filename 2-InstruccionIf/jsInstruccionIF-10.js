//Enriquez Jose
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	var numMax;
	var numMin;

	numMax=11;
	numMin=1

	notaRandom=Math.floor(Math.random() * (numMax - numMin) ) + numMin;

	console.log(notaRandom);

	if(notaRandom<4)
	{
		alert("Vamos, la proxima se puede "+notaRandom);
	}
	else
	{
		if(notaRandom>8)
		{
			alert("EXCELENTE "+notaRandom);
		}
		else
		{
			alert("APROBO "+notaRandom);
		}
	}
}//FIN DE LA FUNCIÓN