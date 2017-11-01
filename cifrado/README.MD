/*Crear una variable donde por medio prompt le pedimos al usuario ingresar un texto para cifrar agregar toLowerCase para hacer minusculas nuestro texto
-Crear un if para la negacion si no se introdujo nada en el texto
-Crear una funcion llamada cipher
-Hacer variable para guardar las letras del texto array
-Recorrer cada letra del texto por medio de un for
- Condicionar por medio de un if el texto ingresado convertir a codigo ASCII por medio de un charCodeAt  de las letras que se nos brinden, sumarle los 33 espacios de desplazamiento y que sea >mayor a 122(del codigo ASCII), guardar en nuestra variable resultado y agregar por medio de un push en el array; convertir a la posicion del alfabeto convertir el codigo a String por medio de un String.fromCharCode.
-Condicionar  la formula que 96 que es donde comenzara la a de ASCII + nuestro texto ingresarle a cada letra (i) un charCodeAt para pasarla otra vez a codigo ASCII  + los 33 espacios del desplazamiento
-Unir los elementos a una sola cadena
-Aqui ya que la computadora nos muestre esa nueva letra
