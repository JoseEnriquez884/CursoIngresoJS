function mostrar()
{
    var primerNumero;
    var segundoNumero;
    var suma;
    var resta;

    primerNumero=prompt("ingrese primer numero");
    primerNumero=parseInt(primerNumero);


    segundoNumero=prompt("ingrese segundo numero");
    segundoNumero=parseInt(segundoNumero);

    resta=primerNumero-segundoNumero;
    suma=primerNumero+segundoNumero;

    if(primerNumero==segundoNumero)
    {
        console.log(primerNumero+""+segundoNumero);
    }else
    {
        if(primerNumero>segundoNumero)
        {
            resta;
            console.log("resta: "+resta);
        }else
        {
            suma;
            console.log(suma);
            if(suma>10)
            {
                console.log("la suma es "+suma+" y supero el 10");
            }
        }
    }

    


}
