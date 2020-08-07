/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  var contador;
  var respuesta;
  var tipoIngresado;
  var cantidadDeBolsas;
  var precioPorBolsa;
  var porcentajeDeDescuento;
  var precioBrutoSinDescuento;
  var descuentoCalculado;
  var precioConDescuento;
  var maximaCantidadDeBolsas;
  var tipoConMaximaCantidadDeBolsas;
  var tipoMasCaro;
  var precioDeTipoMasCaro;

  contador=0;
  respuesta="si";

  while(respuesta=="si")
  {
    tipoIngresado=prompt("ingrese tipo");
    while(isNaN(tipoIngresado)==false || tipoIngresado!="arena" && tipoIngresado!="cal" && tipoIngresado!="cemento")
    {
      tipoIngresado=prompt("error, reingrese tipo valido");
    }

    cantidadDeBolsas=prompt("ingrese cantidad de bolsas");
    cantidadDeBolsas=parseInt(cantidadDeBolsas);
    while(isNaN(cantidadDeBolsas)==true || cantidadDeBolsas<0)
    {
      cantidadDeBolsas=prompt("error, ingrese cantidad de bolsas valida");
      cantidadDeBolsas=parseInt(cantidadDeBolsas);
    }

    precioPorBolsa=prompt("ingrese precio por bolsa");
    precioPorBolsa=parseInt(precioPorBolsa);
    while(isNaN(precioPorBolsa)==true || precioPorBolsa<1)
    {
      precioPorBolsa=prompt("error, reingrese precio por bolsa valido");
      precioPorBolsa=parseInt(precioPorBolsa);
    }

    if(contador==0)
    {
      maximaCantidadDeBolsas=cantidadDeBolsas;
      tipoConMaximaCantidadDeBolsas=tipoIngresado;
      precioDeTipoMasCaro=precioPorBolsa;
      tipoMasCaro=tipoIngresado;
    }else
    {
      if(cantidadDeBolsas>maximaCantidadDeBolsas)
      {
       maximaCantidadDeBolsas=cantidadDeBolsas;
       tipoConMaximaCantidadDeBolsas=tipoIngresado;
      }
      if(precioPorBolsa>precioDeTipoMasCaro)
      {
        precioDeTipoMasCaro=precioPorBolsa;
        tipoMasCaro=tipoIngresado;
      }
    }

    contador=contador+1;
    respuesta=prompt("continua?");

  }

  if(cantidadDeBolsas>30)
  {
    porcentajeDeDescuento=25;
  }else
  {
    if(cantidadDeBolsas>10)
    {
      porcentajeDeDescuento=15;
    }
  }
  precioBrutoSinDescuento=cantidadDeBolsas*precioPorBolsa;
  descuentoCalculado=precioBrutoSinDescuento*porcentajeDeDescuento/100;
  precioConDescuento=precioBrutoSinDescuento-descuentoCalculado;
  
  console.log("el precio bruto sin descuento a pagar es de: $"+precioBrutoSinDescuento);
  console.log("el precio con descuento es de: $"+precioConDescuento);
  console.log("el tipo con mas cantidad de bolsas es: "+tipoConMaximaCantidadDeBolsas+" y tiene: "+maximaCantidadDeBolsas+" bolsas");
  console.log("el tipo mas caro es: "+tipoMasCaro+" y cuesta $"+precioDeTipoMasCaro);
}

