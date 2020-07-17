/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //txtIdLargo
    //txtIdAncho
    //txtIdRadio
    var largoIngresado;
    var anchoIngresado;
    var sumaDeLadosLargo;
    var sumaDeLadosAncho;
    var perimetroDelRectangulo;
    var alambreNecesario;

    largoIngresado=txtIdLargo.value;
    largoIngresado=parseInt(largoIngresado);

    anchoIngresado=txtIdAncho.value;
    anchoIngresado=parseInt(anchoIngresado);

    sumaDeLadosLargo=largoIngresado*2;
    sumaDeLadosAncho=anchoIngresado*2;

    perimetroDelRectangulo=sumaDeLadosLargo+sumaDeLadosAncho;

    alambreNecesario=perimetroDelRectangulo*3;

    alert("Se necesita "+alambreNecesario+"mts de alambre");
}
function Circulo () 
{
    var radioIngresado;
    var radioCalculado;
    var alambreNecesario;

    radioIngresado=txtIdRadio.value;
    radioIngresado=parseInt(radioIngresado);

    radioCalculado=2*radioIngresado*3.14;

    alambreNecesario=radioCalculado*3;

    alert("Se necesita "+alambreNecesario+"mts de alambre");
}
function Materiales () 
{
    var bolsasDeCemento;
    var bolsasDeCal;
    var largoIngresado;
    var anchoIngresado;
    var superficie;
    var bolsasDeCalNecesarias;
    var bolsasDeCementoNecesarias;
    

    bolsasDeCemento=2;
    bolsasDeCal=3;

    largoIngresado=txtIdLargo.value;
    largoIngresado=parseInt(largoIngresado);

    anchoIngresado=txtIdAncho.value;
    anchoIngresado=parseInt(anchoIngresado);

    superficie=largoIngresado*anchoIngresado;

    bolsasDeCementoNecesarias=bolsasDeCemento*superficie;
    bolsasDeCalNecesarias=bolsasDeCal*superficie;

    alert("Se necesitan "+bolsasDeCementoNecesarias+" bolsas de cemento y "+bolsasDeCalNecesarias+" bolsas de cal");
}