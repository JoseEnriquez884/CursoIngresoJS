/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante XX
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/ 
function mostrar()
{
	var contador;
	var tipoIngresado;
	var precioIngresado;
	var cantidadDeUnidadesIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var banderaDePrimerAlcohol;
	var alcoholMasBaratoPrecio;
	var alcoholMasBaratoCantidad;
	var alcoholMasBaratoFabricante;
	var contadorAlcohol;
	var contadorJabon;
	var contadorBarbijo;
	var acumuladorAlcohol;
	var acumuladorJabon;
	var acumuladorBarbijo;
	var promedioDeCompra;

	contador=0;
	banderaDePrimerAlcohol="es el primero";
	contadorAlcohol=0;
	contadorJabon=0;
	contadorBarbijo=0;
	acumuladorAlcohol=0;
	acumuladorJabon=0;
	acumuladorBarbijo=0;

	while(contador<5)
	{
		tipoIngresado=prompt("ingrese tipo");
		while(tipoIngresado!="barbijo" && tipoIngresado!="jabon" && tipoIngresado!="alcohol")
		{
			tipoIngresado=prompt("error, reingrese tipo");
		}
		precioIngresado=prompt("ingrese precio");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("error, reingrese precio");
			precioIngresado=parseInt(precioIngresado);
		}
		cantidadDeUnidadesIngresada=prompt("ingrese cantidad de unidades");
		cantidadDeUnidadesIngresada=parseInt(cantidadDeUnidadesIngresada);
		while(isNaN(cantidadDeUnidadesIngresada)==true || cantidadDeUnidadesIngresada<1 || cantidadDeUnidadesIngresada>1000)
		{
			cantidadDeUnidadesIngresada=prompt("error, reingrese cantidad de unidades");
			cantidadDeUnidadesIngresada=parseInt(cantidadDeUnidadesIngresada);
		}
		marcaIngresada=prompt("ingrese marca");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("error, reingrese marca");
		}
		fabricanteIngresado=prompt("ingrese fabricante");
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("error, reingrese fabricante");
		}

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		if(tipoIngresado=="alcohol")
		{
			if(banderaDePrimerAlcohol=="es el primero")
			{
				banderaDePrimerAlcohol="ya no es el primero";
				alcoholMasBaratoPrecio=precioIngresado;
				alcoholMasBaratoCantidad=cantidadDeUnidadesIngresada;
				alcoholMasBaratoFabricante=fabricanteIngresado;
			}else
			{
				if(precioIngresado<alcoholMasBaratoPrecio)
				{
					alcoholMasBaratoPrecio=precioIngresado;
					alcoholMasBaratoCantidad=cantidadDeUnidadesIngresada;
					alcoholMasBaratoFabricante=fabricanteIngresado;	
				}
			}
			
		}
		//cuento los tipos y los acumulo
		switch(tipoIngresado)
		{
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol=acumuladorAlcohol+cantidadDeUnidadesIngresada;
				break;
			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijo=acumuladorBarbijo+cantidadDeUnidadesIngresada;
				break;
			case "jabon":
				contadorJabon++;
				acumuladorJabon=acumuladorJabon+cantidadDeUnidadesIngresada;
				break;
		}
		
		contador++;
	}

	//hago el promedio de compra segun corresponda
	if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon)
	{
		promedioDeCompra=acumuladorAlcohol/contadorAlcohol;
	}else
	{
		if(acumuladorBarbijo>acumuladorJabon)
		{
			promedioDeCompra=acumuladorBarbijo/contadorBarbijo;
		}else
		{
			promedioDeCompra=acumuladorJabon/contadorJabon;
		}
	}
	
	if(banderaDePrimerAlcohol!="es el primero")
	{
		console.log("alcohol mas barato precio: "+alcoholMasBaratoPrecio);
		console.log("cantidad de unidades de alcohol mas barato:"+alcoholMasBaratoCantidad);
		console.log("fabricante de alcohol mas barato:"+alcoholMasBaratoFabricante);
	}else
	{
		console.log("no hay alcoholes");
	}

	console.log("promedio por compra del tipo con mas unidades: "+promedioDeCompra);

	if(contadorJabon!=0)
	{
		console.log("cantidad de unidades de jabon: "+acumuladorJabon);
	}else
	{
		console.log("no hay jabones");
	}
	
	








	/*
	var contador;
	var tipoIngresado;
	var precioIngresado;
	var cantidadDeUnidadesIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var banderaDePrimerAlcohol;
	var alcoholMasBarato;
	var minimoAlcoholPrecioCantidad;
	var minimoAlcoholPrecioFabricante;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var acumuladorAlcoholUnidades;
	var acumuladorBarbijoUnidades;
	var acumuladorJabonUnidades;
	var promedioDeCompra;

	contador=0;
	banderaDePrimerAlcohol="primer alcohol";
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	acumuladorAlcoholUnidades=0;
	acumuladorBarbijoUnidades=0;
	acumuladorJabonUnidades=0;


	while(contador<5)
	{
		tipoIngresado=prompt("ingrese tipo");
		while(isNaN(tipoIngresado)==false || tipoIngresado!="barbijo" && tipoIngresado!="jabon" && tipoIngresado!="alcohol")
		{
			tipoIngresado=prompt("error, reingrese tipo");
		}
		precioIngresado=prompt("ingrese precio");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("error, reingrese precio");
			precioIngresado=parseInt(precioIngresado);	
		}
		cantidadDeUnidadesIngresada=prompt("ingrese cantidad de unidades");
		cantidadDeUnidadesIngresada=parseInt(cantidadDeUnidadesIngresada);
		while(isNaN(cantidadDeUnidadesIngresada)==true || cantidadDeUnidadesIngresada<1 || cantidadDeUnidadesIngresada>1000)
		{
			cantidadDeUnidadesIngresada=prompt("error, reingrese cantidad de unidades");
			cantidadDeUnidadesIngresada=parseInt(cantidadDeUnidadesIngresada);
		}
		marcaIngresada=prompt("ingrese marca");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("error, reingrese marca");
		}
		fabricanteIngresado=prompt("ingrese fabricante");
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("error, reingrese fabricante");
		}

		//punto a
		if(tipoIngresado=="alcohol")
		{
			if(banderaDePrimerAlcohol=="primer alcohol")
			{
				banderaDePrimerAlcohol="ya no es primero";
				alcoholMasBarato=precioIngresado;
				minimoAlcoholPrecioCantidad=cantidadDeUnidadesIngresada;
				minimoAlcoholPrecioFabricante=fabricanteIngresado;
			}else
			{
				if(precioIngresado<alcoholMasBarato)
				{
					alcoholMasBarato=precioIngresado;
					minimoAlcoholPrecioCantidad=cantidadDeUnidadesIngresada;
					minimoAlcoholPrecioFabricante=fabricanteIngresado;
				}
			}
		}

		//punto b
		switch(tipoIngresado)
		{
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcoholUnidades=acumuladorAlcoholUnidades+cantidadDeUnidadesIngresada;
				break;
			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijoUnidades=acumuladorBarbijoUnidades+cantidadDeUnidadesIngresada;
				break;
			case "jabon":
				contadorJabon++;
				//punto c
				acumuladorJabonUnidades=acumuladorJabonUnidades+cantidadDeUnidadesIngresada;
				break;
		}

		contador++;
	}
	//saco el promedio del tipo con mas unidades
	if(acumuladorAlcoholUnidades>acumuladorBarbijoUnidades && acumuladorAlcoholUnidades>acumuladorJabonUnidades)
	{
		promedioDeCompra=acumuladorAlcoholUnidades/contadorAlcohol;
	}else
	{
		if(acumuladorBarbijoUnidades>acumuladorJabonUnidades)
		{
			promedioDeCompra=acumuladorBarbijoUnidades/contadorBarbijo;
		}else
		{
			promedioDeCompra=acumuladorJabonUnidades/contadorJabon;
		}
	}
	
	
	//mostrar
	if(banderaDePrimerAlcohol!="primer alcohol")
	{
		console.log("el alcohol mas barato cuesta $"+alcoholMasBarato+", hay "+minimoAlcoholPrecioCantidad+" unidades y el fabricante es "+minimoAlcoholPrecioFabricante);	
	}else
	{
		console.log("no hay alcoholes");
	}

	console.log("el promedio de compra del tipo con mas unidades es "+promedioDeCompra);

	if(contadorJabon!=0)
	{
		console.log("hay "+acumuladorJabonUnidades+" jabones");
	}else
	{
		console.log("no hay jabones");
	}
	
	*/
	
	
	
	
	
	
	/*
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




	*/












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
