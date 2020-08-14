function mostrar()
{
	var i;
	var contadorDeDivisores;
	var numeroIngresado;
	
	contadorDeDivisores=0;

	numeroIngresado=prompt("ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(i=1;i<numeroIngresado;i++)
	{
		if(numeroIngresado%i==0)
		{
			contadorDeDivisores++;
			console.log(i);
		}
	}

	console.log("cantidad de divisores: "+contadorDeDivisores);


}//FIN DE LA FUNCIÓN