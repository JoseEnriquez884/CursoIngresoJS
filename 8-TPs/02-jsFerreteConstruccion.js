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
    var largo;
    var ancho;
    var alambreLargo;
    var alambreAncho;
    var medida;

    largo=txtIdLargo.value;
    largo=parseInt(largo);

    ancho=txtIdAncho.value;
    ancho=parseInt(ancho);

    alambreLargo=largo*2;
    alambreAncho=ancho*2;

    medida=alambreLargo+alambreAncho;
    alert(medida);
}
function Circulo () 
{
	
}
function Materiales () 
{
	
}