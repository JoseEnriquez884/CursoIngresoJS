
function mostrar()
{
    var anchoIngresado;
    var largoIngresado;
    var sumaDeLadosAncho;
    var sumaDeLadosLargo;
    var perimetro;

    anchoIngresado=prompt("Ingrese ancho");
    anchoIngresado=parseInt(anchoIngresado);

    largoIngresado=prompt("Ingrese largo");
    largoIngresado=parseInt(largoIngresado);    

    sumaDeLadosAncho=anchoIngresado*2;
    sumaDeLadosLargo=largoIngresado*2;

    perimetro=sumaDeLadosAncho+sumaDeLadosLargo;

    alert("El perimetro es "+perimetro);
}
