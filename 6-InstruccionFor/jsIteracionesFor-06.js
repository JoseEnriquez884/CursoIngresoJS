function mostrar()
{
	var contador;
	var numeroIngresado;
	var contadorDePares;

	contadorDePares=0;

	numeroIngresado=prompt("ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(contador=1;contador<numeroIngresado;contador++)
	{
		if(contador%2==0)
		{
			contadorDePares++;
			console.log(contador);
		}
	}

	console.log("cantidad de pares: "+contadorDePares);



}//FIN DE LA FUNCIÓN