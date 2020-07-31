//Enriquez Jose
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada=prompt("ingrese clave");
	while(claveIngresada!="utn750")
	{
		claveIngresada=prompt("esta mal, ingrese la clave correctamente");
	}

	alert("Bienvenido a utn");
	
	
	
	
	/*var claveIngresada;
	claveIngresada=prompt("ingrese el numero clave");//mientras la condicion se cumpla(es decir que sea verdadera),se va a iterar el while
	
	while(claveIngresada!="utn750")
	{
		claveIngresada=prompt("error, ingrese el numero clave");
	}
	alert("Bienvenido");/*cuando la condicion del while es falsa sale del while 
	y sigue ejecutando el codigo que sigue*/
	
}//FIN DE LA FUNCIÓN
