let entrada = prompt("Ingresa tu nombre");
entrada = entrada.toUpperCase();
alert ("Bienvenido " + entrada);

while (entrada != "OK" ){
alert(entrada + " , por cualquier consulta, no dudes en comunicarte con nosotros");
entrada = prompt("Ingrese OK para ir al Sitio Web");
entrada = entrada.toUpperCase();
}
