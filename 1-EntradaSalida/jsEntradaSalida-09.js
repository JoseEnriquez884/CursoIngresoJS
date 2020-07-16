/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//txtIdSueldo
	//txtIdResultado
	var sueldoIngresado;
	var porcentaje;
	var resultado;

	sueldoIngresado=txtIdSueldo.value;
	sueldoIngresado=parseInt(sueldoIngresado);

	porcentaje=(sueldoIngresado*10)/100;

	resultado=sueldoIngresado+porcentaje;

	txtIdResultado.value=resultado;
}
