/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;//declaro variable
	var edad;

	nombre=txtIdNombre.value;//cargo o defino variable
	edad=txtIdEdad.value;

	alert("Usted se llama "+nombre+" y tiene "+edad+" años");//muestro el valor de la variable
	//alert("Usted se llama "+nombre);
	//alert("y tiene "+edad+" años");
}

