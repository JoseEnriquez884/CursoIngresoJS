/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante xx
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/ 
function mostrar()
{
	//declaracion de variables
	var contador;
	var tipoIngresado;
	var precioIngresado;
	var cantidadDeUnidadesIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var alcoholMasBarato;
	var unidadesAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var contadorDeAlcholes;
	var contadorDeBarbijos;
	var contadorDeJabones;
	var sumadorDeAlcoholes;
	var sumadorDeBarbijos;
	var sumadorDeJabones;
	var promedioDeCompra;
	

	//contadores
	contador=0;
	contadorDeAlcholes=0;
	contadorDeBarbijos=0;
	contadorDeJabones=0;
	sumadorDeAlcoholes=0;
	sumadorDeBarbijos=0;
	sumadorDeJabones=0;

	while(contador<5)
	{
		tipoIngresado=prompt("Ingrese tipo");
		while(isNaN(tipoIngresado)==false || tipoIngresado!="barbijo" && tipoIngresado!="jabon" && tipoIngresado!="alcohol")
		{
			tipoIngresado=prompt("Error, reingrese tipo valido");
		}

		precioIngresado=prompt("ingrese precio");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("error, reingrese precio valido");
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadDeUnidadesIngresada=prompt("ingrese cantidad de unidades");
		cantidadDeUnidadesIngresada=parseInt(cantidadDeUnidadesIngresada);
		while(isNaN(cantidadDeUnidadesIngresada)==true || cantidadDeUnidadesIngresada<1 || cantidadDeUnidadesIngresada>1000)
		{
			cantidadDeUnidadesIngresada=prompt("error, reingrese cantidad de unidades valida");
			cantidadDeUnidadesIngresada=parseInt(cantidadDeUnidadesIngresada);
		}
		
		marcaIngresada=prompt("ingrese marca");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("error, reingrese marca valida");
		}

		fabricanteIngresado=prompt("ingrese fabricante");
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("error, reingrese fabricante valido");
		}

		//punto a
		//Del más barato de los alcohol, la cantidad de unidades y el fabricante
		if(tipoIngresado=="alcohol")
		{
			if(contador==0)
			{
				alcoholMasBarato=precioIngresado;
				unidadesAlcoholMasBarato=cantidadDeUnidadesIngresada;
				fabricanteAlcoholMasBarato=fabricanteIngresado;
			}else
			{
				if(precioIngresado<alcoholMasBarato)
				{
					alcoholMasBarato=precioIngresado;
					unidadesAlcoholMasBarato=cantidadDeUnidadesIngresada;
					fabricanteAlcoholMasBarato=fabricanteIngresado;
				}
			}
		}

		//punto B
		//Del tipo con mas unidades, el promedio por compra
		switch(tipoIngresado)
		{
			case "alcohol":
				contadorDeAlcholes=contadorDeAlcholes+1;
				sumadorDeAlcoholes=sumadorDeAlcoholes+cantidadDeUnidadesIngresada;
				break;
			case "barbijo":
				contadorDeBarbijos=contadorDeBarbijos+1;
				sumadorDeBarbijos=sumadorDeBarbijos+cantidadDeUnidadesIngresada;
				break;
			//punto c, Cuántas unidades de jabones hay en total
			case "jabon":
				contadorDeJabones=contadorDeJabones+1;
				sumadorDeJabones=sumadorDeJabones+cantidadDeUnidadesIngresada;
				break;
		}

		contador=contador+1;
	}

	if(sumadorDeAlcoholes>sumadorDeBarbijos && sumadorDeAlcoholes>sumadorDeJabones)
	{
		promedioDeCompra=sumadorDeAlcoholes/contadorDeAlcholes;
	}else
	{
		if(sumadorDeBarbijos>sumadorDeJabones)
		{
			promedioDeCompra=sumadorDeBarbijos/contadorDeBarbijos;
		}else
		{
			promedioDeCompra=sumadorDeJabones/contadorDeJabones;
		}
	}






	console.log("el alcohol mas barato cuesta "+alcoholMasBarato+", hay "+unidadesAlcoholMasBarato+" unidades y el fabricante es "+fabricanteAlcoholMasBarato);
	console.log("el promedio por compra del tipo con mas unidades es: "+promedioDeCompra);
	console.log("hay "+sumadorDeJabones+" jabones");

















	/*
	var contador;
	var tipo;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var banderaPrimerAlcohol;
	var minimoAlcoholPrecio;
	var minimoAlcoholPrecioFabricante;
	var minimoAlcoholPrecioCantidad;
	var contadorBarbijo;
	var contadorJabon;
	var contadorAlcohol;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var promedioDeCompra;

	acumuladorAlcohol=0;
	acumuladorJabon=0;
	acumuladorBarbijo=0;
	contadorAlcohol=0;
	contadorJabon=0;
	contadorBarbijo=0;
	contador=0;
	banderaPrimerAlcohol="no paso";
	while(contador<5)
	{
		tipo=prompt("ingrese tipo");
		while(tipo!="barbijo" && tipo!="jabón"&& tipo!="alcohol")
		{
			tipo=prompt("error, reingrese tipo");
		}
		
		precio=prompt("ingrese precio");
		precio=parseInt(precio);
		while(precio<100 || precio>300)
		{
			precio=prompt("error,reingrese precio");
			precio=parseInt(precio);
		}

		cantidadUnidades=prompt("ingrese cantidadUnidades");
		cantidadUnidades=parseInt(cantidadUnidades);
		while(cantidadUnidades<0 || cantidadUnidades>1000)
		{
			cantidadUnidades=prompt("error,reingrese cantidadUnidades");
			cantidadUnidades=parseInt(cantidadUnidades);
		}
		marca=prompt("ingrese marca");
		fabricante=prompt("ingrese fabricante");

		//Punto A
		if(tipo=="alcohol")
		{
			if(banderaPrimerAlcohol=="no paso")
			{
				banderaPrimerAlcohol="ya paso por aca";
				minimoAlcoholPrecio=precio;
				minimoAlcoholPrecioCantidad=cantidadUnidades;
				minimoAlcoholPrecioFabricante=fabricante;
			}else
			{
				if(precio<minimoAlcoholPrecio)
				{
					minimoAlcoholPrecio=precio;
					minimoAlcoholPrecioCantidad=cantidadUnidades;
					minimoAlcoholPrecioFabricante=fabricante;
				}
			}

		}
		switch(tipo)
		{
			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijo=acumuladorBarbijo+cantidadUnidades;
				break;
			case "jabón":
				contadorJabon++;
				acumuladorJabon=acumuladorJabon+cantidadUnidades;
				break;
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol=acumuladorAlcohol+cantidadUnidades;
				break;
		}






		contador=contador+1;
	}

	//sacar el que tiene mas unidades	
	if(acumuladorAlcohol>acumuladorJabon && acumuladorAlcohol>acumuladorBarbijo)
	{
		//alcohol
		promedioDeCompra=acumuladorAlcohol/contadorAlcohol;
	}
	else
	{
		if(acumuladorJabon>acumuladorBarbijo)
		{
			//acumuladorJabon
			promedioDeCompra=acumuladorJabon/contadorJabon;
		}else
		{
			//acumuladorBarbijo
			promedioDeCompra=acumuladorBarbijo/contadorBarbijo;
		}
	}
	

*/





	

	
	
	
	
}
