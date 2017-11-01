//crear un prompt donde le preguntamos al usuario el numero de tarjeta
var card = prompt("Ingesa el numero de tarjeta");
//crear un for donde lo recorremos por medio deun length y condicionemos que no tenga espacios

function Valid(){
for(var i =0; i< card.length; i++){
  alert("Ingresa una opcion valida sin espacios");
} else {
//pasar los numeros a un array en orden inverso lo guardamos en una variable
    var number = card.split("");
    var backwards = number.reverse();//acomodamos los numeros de atras hacia adelante
    //console.log(backwards);
    //aplicar la operacion a los numeros,Condicionamos nuestra cantidad de numeros
}  for(var j = 0; j<16; j++){
    if(j % 2 == 0) {iguales = iguales + (backwards[j];)
    }
    for(var n = 1; n<16; n++){
       if(n % 2 == 0) {impar = impar +(backwards[n];)
       }

       {
var goodCard =
    if(j%2 ==0){more = (card[j]-"0") *2;
    if(more>=10) more = (more-10) + 1;}
       else {more =card[j]-"0";}
       }
       sum = suma + more %10
     }


}
