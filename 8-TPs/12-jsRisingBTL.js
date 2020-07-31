//Enriquez Jose
/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBrutoIngresado;
	var numeroDeLegajoIngresado;
	var nacionalidadIngresada;

	edadIngresada=prompt("ingrese edad");
	while(edadIngresada<18 || edadIngresada>90)
	{
		edadIngresada=prompt("error, ingrese edad valida");
		edadIngresada=parseInt(edadIngresada);
	}

	sexoIngresado=prompt("ingrese sexo");
	while(sexoIngresado!="M" && sexoIngresado!="F")
	{
		sexoIngresado=prompt("error, ingrese sexo valido");
	}

	estadoCivilIngresado=prompt("ingrese estado civil");
	estadoCivilIngresado=parseInt(estadoCivilIngresado);
	while(estadoCivilIngresado<1 || estadoCivilIngresado>4)
	{
		estadoCivilIngresado=prompt("error, ingrese estado civil valido");
		estadoCivilIngresado=parseInt(estadoCivilIngresado);
	}

	sueldoBrutoIngresado=prompt("ingrese sueldo bruto");
	sueldoBrutoIngresado=parseInt(sueldoBrutoIngresado);
	while(sueldoBrutoIngresado<8000)
	{
		sueldoBrutoIngresado=prompt("error, ingrese sueldo bruto valido");
		sueldoBrutoIngresado=parseInt(sueldoBrutoIngresado);
	}

	numeroDeLegajoIngresado=prompt("ingrese numero de legajo");
	numeroDeLegajoIngresado=parseInt(numeroDeLegajoIngresado);
	while(numeroDeLegajoIngresado<1000 || numeroDeLegajoIngresado>9999)
	{
		numeroDeLegajoIngresado=prompt("error, ingrese numero de legajo valido");
		numeroDeLegajoIngresado=parseInt(numeroDeLegajoIngresado);
	}

	nacionalidadIngresada=prompt("ingrese nacionalidad");
	while(nacionalidadIngresada!="A" && nacionalidadIngresada!="E" && nacionalidadIngresada!="N")
	{
		nacionalidadIngresada=prompt("error, ingrese nacionalidad valida");
	}

	txtIdEdad.value=edadIngresada;
	txtIdSexo.value=sexoIngresado;
	txtIdEstadoCivil.value=estadoCivilIngresado;
	txtIdSueldo.value=sueldoBrutoIngresado;
	txtIdLegajo.value=numeroDeLegajoIngresado;
	txtIdNacionalidad.value=nacionalidadIngresada;

	//txtIdEdad
	//txtIdSexo
	//txtIdEstadoCivil
	//txtIdSueldo
	//txtIdLegajo
	//txtIdNacionalidad




}
