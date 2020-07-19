
function mostrar()
{
    //Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
    var ladosDelTrianguloEquilatero;
    var perimetroDeTrianguloEquilatero;

    ladosDelTrianguloEquilatero=prompt("Ingrese dato del triangulo equilatero");
    ladosDelTrianguloEquilatero=parseInt(ladosDelTrianguloEquilatero);

    perimetroDeTrianguloEquilatero=ladosDelTrianguloEquilatero*3;

    alert("El perimetro del triangulo equilatero es: "+perimetroDeTrianguloEquilatero);
}
