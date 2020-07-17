/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //txtIdTemperatura
    var temperaturaIngresada;
    var pasajeACentigrados;

    temperaturaIngresada=txtIdTemperatura.value;
    temperaturaIngresada=parseInt(temperaturaIngresada);

    pasajeACentigrados=(temperaturaIngresada-32)*(5/9);

    alert(temperaturaIngresada+" Fahrenheit son "+pasajeACentigrados+" centígrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaIngresada;
    var pasajeAFahrenheit;

    temperaturaIngresada=txtIdTemperatura.value;
    temperaturaIngresada=parseInt(temperaturaIngresada);

    pasajeAFahrenheit=(temperaturaIngresada*9/5)+32;

    alert(temperaturaIngresada+" centígrados son "+pasajeAFahrenheit+" Fahrenheit");
}
