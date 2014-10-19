function noIr(e)
{
	e.preventDefault();
}

function main()
{
	$("#ligaTexto").click( function(e){
		e.preventDefault();
		//$("#divTexto").toggle(2000);
	});
	setInterval("pedir()",5000);
	
}
function pedir()
{
	$.get("prueba.php",{},entradaDatos);
}

function entradaDatos(datos)
{
	$("#divTexto").html(datos);
}


$(document).ready(main);