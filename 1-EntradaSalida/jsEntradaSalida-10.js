/*
Enriquez Jose
se pide dos importes, y un porcentaje de descuento (todo con prompt)
y se muestra el siguiente mensaje:
"los productos cuestan $??? y $??? , sumados son $??? ,tienen un descuento de $??? pesos, el precio total con descuento es $??? ,el iva es de $??? y el precio final con IVA es $???"
ej: si ingresa 100 , 300 con el descuento de 30, elmensaje deberiaser el siguiente:
"los productos cuestan $100 y $300 , sumados son $400, tienen un descuento de $120 pesos, el precio total con descuento es $380 ,el iva es de $79,8 y el precio final con IVA es $459,8"*/
function mostrarAumento()
{
	var primerImporteIngresado;
	var segundoImporteIngresado;
	var porcentajeIngresado;
	var sumaDeImportes;
	var descuentoCalculado;
	var precioConDescuento;
	var calculoIva;
	var precioFinalConIva;

	primerImporteIngresado=prompt("Ingrese el primer importe");
	primerImporteIngresado=parseInt(primerImporteIngresado);

	segundoImporteIngresado=prompt("Ingrese el segundo importe");
	segundoImporteIngresado=parseInt(segundoImporteIngresado);

	porcentajeIngresado=prompt("Ingrese porcentaje de descuento");
	porcentajeIngresado=parseInt(porcentajeIngresado);

	sumaDeImportes=primerImporteIngresado+segundoImporteIngresado;

	descuentoCalculado=(sumaDeImportes*porcentajeIngresado)/100;

	precioConDescuento=sumaDeImportes-descuentoCalculado;

	calculoIva=precioConDescuento*0.21;

	precioFinalConIva=precioConDescuento+calculoIva;

	alert("los productos cuestan $"+primerImporteIngresado+" y $"+segundoImporteIngresado+" , sumados son $"+sumaDeImportes+" ,tienen un descuento de $"+descuentoCalculado+" pesos, el precio total con descuento es $"+precioConDescuento+" ,el iva es de $"+calculoIva+" y el precio final con IVA es $"+precioFinalConIva);
}
