//Enriquez Jose
//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
function mostrar()
{
	//tomo la edad  
	var edadIngresada;

	edadIngresada=txtIdEdad.value;

	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>12 && edadIngresada<18)
	{
		alert("Es adolescente");
	}
}//FIN DE LA FUNCIÓN
/*
//el 4
function mostrar()
{
	
	var edadInresada;
	edadInresada=txtIdEdad.value;			
	edadInresada=parseInt(edadInresada);
	//mal
	if(edadInresada<18 && >12)
	{
		alert("adolescentes");
	}
	


	if(edadInresada<18 && edadInresada>12   )
	{
		alert("adolescentes");
	}




	if(edadInresada>12)
	{
		
		if(edadInresada<18)
		{
			//adolescentes
		}
	}


}//FIN DE LA FUNCIÓN*/