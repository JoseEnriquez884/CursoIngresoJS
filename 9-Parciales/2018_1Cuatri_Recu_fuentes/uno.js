
function mostrar()
{
    var largoIngresado;
    var anchoIngresado;
    var sumaDeLadosDelLargo;
    var sumaDeLadosDelAncho;
    var perimetro;

    largoIngresado=prompt("Ingrese largo");
    largoIngresado=parseInt(largoIngresado);

    anchoIngresado=prompt("Ingrese ancho");
    anchoIngresado=parseInt(anchoIngresado);

    sumaDeLadosDelLargo=largoIngresado*2;
    sumaDeLadosDelAncho=anchoIngresado*2;

    perimetro=sumaDeLadosDelLargo+sumaDeLadosDelAncho;

    alert("El perimetro es "+perimetro);
}
