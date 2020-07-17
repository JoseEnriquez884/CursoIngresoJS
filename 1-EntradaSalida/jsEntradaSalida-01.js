/*
Enriquez Jose
Se pide un importe y un porcentaje descuento por prompt, y se muestra el importe con el descuento por alert con el mensaje " el importe es $ xxxx el total de descuento es $xxx y el precio final es $xxx, gracias por su compra"*/
function mostrar()
{
	var importe;
	var porcentaje;
	var descuento;
	var importeFinal;

	importe=prompt("Ingrese importe");
	importe=parseInt(importe);

	porcentaje=prompt("Ingrese porcentaje descuento");
	porcentaje=parseInt(porcentaje);

	descuento=(importe*porcentaje)/100;

	importeFinal=importe-descuento;

	alert("El importe es $"+importe+" el total de descuento es $"+descuento+" y el precio final es $"+importeFinal+", gracias por su compra");
}

