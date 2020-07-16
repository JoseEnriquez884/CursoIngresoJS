/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;

	alert("El resultado es: "+resultado);
	//txtIdNumeroUno
	//txtIdNumeroDos

	/* var dato;

	dato=parseInt(3);//ok
	dato=parseInt("z999");//NaN
	dato=parseInt("");//NaN
	dato=parseInt("666z");// solo 666
	dato=parseInt("66z7");//solo 66
	dato=parseInt("zz");//NaN
	dato=parseInt("3");//3
	dato=parseInt(lalala);//error*/
}

