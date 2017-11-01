
//Cifrado Cesar- Sustitución de letras, desplazamiento de 33 espacios al alfabeto
//Crear una variable donde se guardara el prompt
var texto = prompt("Ingresa un texto para cifrar mayusculas o minusculas ").toLowerCase();//convertilo a minusculas
//Crear un if para la negacion si no se introdujo nada en el texto con un alert avisando al usuario
  if (!texto) {
   alert("Ingrese una opcion valida sin espacios ni números");
}
//Crear una funcion llamada cipher
 function cipher(texto){
  //Hacer variable para guardar las letras del texto
   var resultado = [];//un array para guardar resultado
    for (var i = 0; i<texto.length; i++){ //Recorrer cada letra del texto por medio de un for
//Condicionar por medio de un if convertir a codigo ASCII por medio de un charCodeAt, sumarle los 33 espacios de desplazamiento
//convertir el codigo a String por medio de un String.fromCharCode.
    if(texto.charCodeAt(i)+33 > 122)resultado.unshift(String.fromCharCode(96+texto.charCodeAt(i)-122+33));
//pasarla otra vez a codigo ASCII  + los 33 espacios del desplazamiento//
    else resultado.push(String.fromCharCode(texto.charCodeAt(i)+33));

}   //unir los elementos 
    return resultado.join('');
}//Aqui ya que la computadora nos muestre esa nueva letra
    alert("Tu texto nuevo cifrado es: " +cipher(texto));
