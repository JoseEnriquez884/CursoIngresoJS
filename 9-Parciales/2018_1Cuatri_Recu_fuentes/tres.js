function mostrar()
{
    var precioIngresado;
    var porcentajeIngresado;
    var descuentoCalculado;
    var precioFinal;

    precioIngresado=prompt("Ingrese precio");
    precioIngresado=parseInt(precioIngresado);

    porcentajeIngresado=prompt("Imgrese porcentaje");
    porcentajeIngresado=parseInt(porcentajeIngresado);

    descuentoCalculado=(precioIngresado*porcentajeIngresado)/100;

    precioFinal=precioIngresado-descuentoCalculado;

    elPrecioFinal.value=precioFinal;
}
