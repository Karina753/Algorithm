/*Abra una página de Javascript de repl.it y llámela Ejercicio de Introducción a los Algoritmos 2.
Escriba un algoritmo para encontrar el mayor entre 5 números diferentes ingresados ​​por el usuario.
Imprima el número más grande en la consola.*/

function numeroMayor(){
  let number1= Number(window.prompt ("Ingresa el primer numero : ", ""));
  let number2= Number(window.prompt ("Ingresa el segundo numero : ", ""));
  let number3= Number(window.prompt ("Ingresa el tercero numero : ", ""));
  let number4= Number(window.prompt ("Ingresa el cuarto numero : ", ""));
  let number5= Number(window.prompt ("Ingresa el quinto numero : ", ""));

  if (number1>number2 && number1> number3 && number1> number4 && number1>number5){
   alert("El numero mayor es: ", number1);
  }else if (number2> number3 && number2 > number4 && number2> number5){
    alert ( "el numro mayor es: ", number2);
  }else if (number3> number4 && number3> number5){
    alert ("El numero mayor es: ", number3);
  } else if (number4> number5){
    alert("El numero mayor es: + number4");
  }else if (number5){
   alert("El número mayor es: "+ number5);
  }
}
numeroMayor();
