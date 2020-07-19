function mostrar()
{
    //A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
    var personaUno;
    var personaDos;
    var pesoPersonaUno;
    var pesoPersonaDos;
    var sumaDeKilos;
    var promedioDeKilos;

    personaUno=prompt("Ingrese su nombre");
    personaDos=prompt("Ingrese nombre de la pareja");

    pesoPersonaUno=prompt("ingrese el peso de "+personaUno);
    pesoPersonaUno=parseInt(pesoPersonaUno);

    pesoPersonaDos=prompt("Ingrese peso de "+personaDos);
    pesoPersonaDos=parseInt(pesoPersonaDos);

    sumaDeKilos=pesoPersonaUno+pesoPersonaDos;

    promedioDeKilos=sumaDeKilos/2;

    alert("ustedes se llaman "+personaUno+" y "+personaDos+" y pesan "+pesoPersonaUno+" y "+pesoPersonaDos+" kilos, que sumados son "+sumaDeKilos+" kilos y el promedio de peso es "+promedioDeKilos+" kilos");
}
