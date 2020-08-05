/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/ 
function mostrar()
{
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
	
	
	
	
	
	/*var contador;
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
	acumuladorBarbijo=0

	contadorAlcohol=0;
	contadorJabon=0;
	contadorBarbijo=0;

	contador=0;
	banderaPrimerAlcohol="no paso";
	while(contador<5)
	{
		tipo=prompt("ingrese tipo");
		while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol")
		{
			tipo=prompt("error, ingrese tipo valido");
		}

		precio=prompt("ingrese precio");
		precio=parseInt(precio);
		while(precio<100 || precio>300)
		{
			precio=prompt("error, ingrese precio valido");
			precio=parseInt(precio);
		}

		cantidadUnidades=prompt("ingrese cantidadUnidades");
		cantidadUnidades=parseInt(cantidadUnidades);
		while(cantidadUnidades<0 || cantidadUnidades>1000)
		{
			cantidadUnidades=prompt("error, ingrese cantidadUnidades valido");
			cantidadUnidades=parseInt(cantidadUnidades);
		}


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
				contadorBarbijo=contadorBarbijo+1;
				acumuladorBarbijo=acumuladorBarbijo+cantidadUnidades;
				break;
			case "jabon":
				contadorJabon=contadorJabon+1;
				acumuladorJabon=acumuladorJabon+cantidadUnidades;
				break;
			case "alcohol":
				contadorAlcohol=contadorAlcohol+1;
				acumuladorAlcohol=acumuladorAlcohol+cantidadUnidades
				break;	
		}
		
		
		contador=contador+1;
	}

	if(acumuladorAlcohol>acumuladorJabon && acumuladorAlcohol>acumuladorBarbijo)
	{
		//alcohol
		promedioDeCompra=acumuladorAlcohol/contadorAlcohol;
	}else
	{
		if(acumuladorJabon>acumuladorBarbijo)
		{
			//acumulador jabon
			promedioDeCompra=acumuladorJabon/contadorJabon;
		}else
		{
			//acumulador barbijo
			promedioDeCompra=acumuladorBarbijo/contadorBarbijo;
		}
	}

	//sacar el que tiene mas unidades

	*/
}
