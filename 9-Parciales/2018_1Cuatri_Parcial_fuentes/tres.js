function mostrar()
{
    var precioIngresado;
    var porcentajeIngresado;
    var porcentajeCalculado;
    var precioConDescuento;

    precioIngresado=prompt("Ingrese precio");
    precioIngresado=parseInt(precioIngresado);

    porcentajeIngresado=prompt("Ingrese porcentaje");
    porcentajeIngresado=parseInt(porcentajeIngresado);

    porcentajeCalculado=(precioIngresado*porcentajeIngresado)/100

    precioConDescuento=precioIngresado-porcentajeCalculado;

    elPrecioFinal.value=precioConDescuento;
}
