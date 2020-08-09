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
  var respuesta;
  var tipoIngresado;
  var cantidadDeBolsas;
  var precioPorBolsaIngresado;
  var acumuladorDeBolsas;
  var precioBrutoTotal;
  var precioBrutoProducto;
  var porcentajeDescuento;
  var descuentoCalculado;
  var precioConDescuento;
  var acumuladorCal;
  var acumuladorCemento;
  var acumuladorArena;
  var tipoConMasUnidades;
  var banderaDelPrimerProducto;
  var tipoMasCaro;
  var tipoMasCaroPrecio;

  respuesta="si";
  acumuladorDeBolsas=0;
  precioBrutoTotal=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  acumuladorArena=0;
  banderaDelPrimerProducto="es el primero"

  while(respuesta=="si")
  {
    tipoIngresado=prompt("ingrese tipo");
    while(isNaN(tipoIngresado)==false || tipoIngresado!="arena" && tipoIngresado!="cal" && tipoIngresado!="cemento")
    {
      tipoIngresado=prompt("error, reingrese tipo");
    }
    cantidadDeBolsas=prompt("ingrese cantidad de bolsas");
    cantidadDeBolsas=parseInt(cantidadDeBolsas);
    while(isNaN(cantidadDeBolsas)==true || cantidadDeBolsas<1)
    {
      cantidadDeBolsas=prompt("error, reingrese cantidad de bolsas");
      cantidadDeBolsas=parseInt(cantidadDeBolsas);
    }
    precioPorBolsaIngresado=prompt("ingrese precio por bolsa");
    precioPorBolsaIngresado=parseInt(precioPorBolsaIngresado);
    while(isNaN(precioPorBolsaIngresado)==true || precioPorBolsaIngresado<1)
    {
      precioPorBolsaIngresado=prompt("error, reingrese precio por bolsa");
      precioPorBolsaIngresado=parseInt(precioPorBolsaIngresado);
    }

    acumuladorDeBolsas=acumuladorDeBolsas+cantidadDeBolsas;
    precioBrutoProducto=precioPorBolsaIngresado*cantidadDeBolsas;
    precioBrutoTotal=precioBrutoTotal+precioBrutoProducto;//acumulador

    if(banderaDelPrimerProducto=="es el primero")
    {
      banderaDelPrimerProducto="ya no lo es";
      tipoMasCaroPrecio=precioPorBolsaIngresado;
      tipoMasCaro=tipoIngresado;
    }else
    {
      if(precioPorBolsaIngresado>tipoMasCaroPrecio)
      {
        tipoMasCaroPrecio=precioPorBolsaIngresado;
        tipoMasCaro=tipoIngresado;
      }
    }


    switch(tipoIngresado)
    {
      case "arena":
        acumuladorArena=acumuladorArena+cantidadDeBolsas;
        break;
      case "cal":
        acumuladorCal=acumuladorCal+cantidadDeBolsas;
        break;
      case "cemento":
        acumuladorCemento=acumuladorCemento+cantidadDeBolsas;
        break;
    }
    
    respuesta=prompt("desea continuar?");
  }

  if(acumuladorArena>acumuladorCal && acumuladorArena>acumuladorCemento)
  {
    tipoConMasUnidades="arena";
  }else
  {
    if(acumuladorCal>acumuladorCemento)
    {
      tipoConMasUnidades="cal";
    }else
    {
      tipoConMasUnidades="cemento";
    }
  }



  if(acumuladorDeBolsas>30)
  {
    porcentajeDescuento=25;
  }else
  {
    if(acumuladorDeBolsas>10)
    {
      porcentajeDescuento=15;
    }else
    {
      porcentajeDescuento=0;
    }
  }

  if(porcentajeDescuento!=0)
  {
    descuentoCalculado=precioBrutoTotal*porcentajeDescuento/100;
    precioConDescuento=precioBrutoTotal-descuentoCalculado;
    console.log("pagar con descuento:"+precioConDescuento);
  }


  //El importe total a pagar , bruto sin descuento
  console.log("bruto sin descuento:"+precioBrutoTotal);

  console.log("el tipo mas comprado:"+tipoConMasUnidades);

  console.log("el tipo mas caro:"+tipoMasCaro);

}

