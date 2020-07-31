//Enriquez Jose
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado=prompt("Ingrese sexo valido");
	}
	
	txtIdSexo.value=sexoIngresado;
	
	
	
	
	
	/*var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado=prompt("error, ingrese f ó m .");
	}
	txtIdSexo.value=sexoIngresado;*/
}//FIN DE LA FUNCIÓN