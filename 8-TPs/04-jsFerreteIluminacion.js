/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var marcaLamparas;
    var porcentajeDescuento;
    var precioLampara;
    var precioBruto;
    var descuentoCalculado;
    var precioFinalConDescuento;
    var impuestoAgregado;
    var precioConImpuesto;

    //tomo id y parseo cantidad de lamparas
    cantidadLamparas=txtIdCantidad.value;
    cantidadLamparas=parseInt(cantidadLamparas);

    //tomo id de las marcas de lamparas
    marcaLamparas=Marca.value;

    //precio de cada lampara
    precioLampara=35;

    //calculo el precio bruto sin descuento
    precioBruto=cantidadLamparas*precioLampara;

//             -----Agregado A con SWITCH-----             

    switch(cantidadLamparas)
    {
        case 3:
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                    porcentajeDescuento=15;
                    break;
                case "FelipeLamparas":
                    porcentajeDescuento=10;
                    break;
                default:
                    porcentajeDescuento=5;
                    break;
            }
            break;
        case 4:
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentajeDescuento=25;
                    break;
                default:
                    porcentajeDescuento=20;
                    break;
            }
            break;
        case 5:
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                    porcentajeDescuento=40;
                    break;
                default:
                    porcentajeDescuento=30;
                    break;
            }
            break;
        default:
            porcentajeDescuento=50;
            break;
    }

    descuentoCalculado=precioBruto*porcentajeDescuento/100;
    precioFinalConDescuento=precioBruto-descuentoCalculado;
    txtIdprecioDescuento.value=precioFinalConDescuento;

    //if(precioFinalConDescuento>120)
    switch(precioFinalConDescuento)
    {
        case 120:
        default:
            impuestoAgregado=precioFinalConDescuento*10/100;
            precioConImpuesto=precioFinalConDescuento+impuestoAgregado;
            alert("IIBB usted pago "+precioConImpuesto+" siendo "+impuestoAgregado+" el impuesto que se pago");
            break;        
    }
    


//             -----Agregado A con IF ELSE-----

    //descuentoCalculado=precioBruto*porcentajeDescuento/100;
    /*
    if(cantidadLamparas>5)
    {
        porcentajeDescuento=50;
    }else
    {
        if(cantidadLamparas==5)
        {
            if(marcaLamparas=="ArgentinaLuz")
            {
                porcentajeDescuento=40;
            }else
            {
                porcentajeDescuento=30;
            }
        }else
        {
            if(cantidadLamparas==4)
            {
                if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
                {
                    porcentajeDescuento=25;
                }
                else
                {
                    porcentajeDescuento=20;
                }
            }else
            {
                if(cantidadLamparas==3)
                {
                    if(marcaLamparas=="ArgentinaLuz")
                    {
                        porcentajeDescuento=15;
                    }else
                    {
                        if(marcaLamparas=="FelipeLamparas")
                        {
                            porcentajeDescuento=10;
                        }else
                        {
                            porcentajeDescuento=5;
                        }
                    }
                }
            }
        }
    }

    descuentoCalculado=precioBruto*porcentajeDescuento/100;
    precioFinalConDescuento=precioBruto-descuentoCalculado;
    txtIdprecioDescuento.value=precioFinalConDescuento;
    
    if(precioFinalConDescuento>120)
    {
        impuestoAgregado=precioFinalConDescuento*10/100;
        precioConImpuesto=precioFinalConDescuento+impuestoAgregado;
        alert("IIBB usted pago "+precioConImpuesto+" siendo "+impuestoAgregado+" el impuesto que se pago");
    }
    */
}
