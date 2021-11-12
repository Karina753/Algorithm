// Falló si obtuvo 6 o menos
// Insuficiente si puntuaron> 6 pero menos de 9 (9 incluidos)
// Bueno si puntuaron> 9 pero menos de 14 (14 incluidos)
// Excelente si anotaron 15
// Error si los participantes ingresan un número negativo o un número fuera del rango admitido (fuera de 0-15)

function tareas(){
  let tarea = Number (window.prompt("Ingresar tarea realizadas",""));
  if(tarea >=0 && tarea <=6){
    alert("Failed");
  } else if (tarea > 6 && tarea <=9){
    alert("Insufficient");
  } else if( tarea > 9 && tarea <=14){
    alert ("good")
  } else if (tarea ==15){
    alert ("Excellent");
  }else {
    alert("Error");
  }
  }
tareas();