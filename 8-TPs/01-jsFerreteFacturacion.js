/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //txtIdPrecioUno
    //txtIdPrecioDos
    //txtIdPrecioTres
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaDePrecios;

    precioUno=txtIdPrecioUno.value
    precioUno=parseInt(precioUno);

    precioDos=txtIdPrecioDos.value;
    precioDos=parseInt(precioDos);

    precioTres=txtIdPrecioTres.value;
    precioTres=parseInt(precioTres);

    sumaDePrecios=precioUno+precioDos+precioTres;

    alert("La suma es: "+sumaDePrecios);
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedioDePrecios;

    precioUno=txtIdPrecioUno.value
    precioUno=parseInt(precioUno);

    precioDos=txtIdPrecioDos.value;
    precioDos=parseInt(precioDos);

    precioTres=txtIdPrecioTres.value;
    precioTres=parseInt(precioTres);

    promedioDePrecios=(precioUno+precioDos+precioTres)/3;

    alert("El promedio es: "+promedioDePrecios);
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var sumaDePrecios;
    var porcentajeDeIva;
    var precioFinal;

    precioUno=txtIdPrecioUno.value
    precioUno=parseInt(precioUno);

    precioDos=txtIdPrecioDos.value;
    precioDos=parseInt(precioDos);

    precioTres=txtIdPrecioTres.value;
    precioTres=parseInt(precioTres);

    sumaDePrecios=precioUno+precioDos+precioTres;

    porcentajeDeIva=sumaDePrecios*0.21;

    precioFinal=sumaDePrecios+porcentajeDeIva;

    alert("El precio final es: "+precioFinal);
}