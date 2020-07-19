function mostrar()
{
    //Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
    //elPrecioFinal
    var precioIngresado;
    var porcentajeIngresado;
    var porcentajeCalculado;
    var precioFinal;
    
    precioIngresado=prompt("Ingrese precio");
    precioIngresado=parseInt(precioIngresado);

    porcentajeIngresado=prompt("Ingrese porcentaje");
    porcentajeIngresado=parseInt(porcentajeIngresado);

    porcentajeCalculado=(precioIngresado*porcentajeIngresado)/100;

    precioFinal=precioIngresado-porcentajeCalculado;

    elPrecioFinal.value=precioFinal;
}
