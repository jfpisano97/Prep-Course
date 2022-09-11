// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevo = [];
  for (i=0; i < array.length; i++) {
  var a = array[i] + 1;
  nuevo.push(a)
  }
    return nuevo
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var nuevo = palabras[0]
  for (i=1; i < palabras.length; i++){
 nuevo = nuevo + " " + palabras[i]
  }
 return nuevo
 // usa esto capo palabras.join(" ")
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (i=0; i < array.length; i++){
    if (array[i] == elemento){
      return true
    }
  }
  return false
  // también se puede usar array.includes(elemento), devuelve true or false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  // primero puedo chequear que cada elemento del array sea un entero, con un for antes que nada
  for (i=0; i < numeros.length; i++){
    if (Number.isInteger(numeros[i])){ //number.isinteger devuelve true or false. en este caso si es true, no hace nada, si es false devuelve error    
    } else {
    return "No todos los numeros son enteros"    
    }
  }

  // ahora si fuera del loop empieza el código
  var a = 0
  for (i=0; i < numeros.length; i++){
    var a = a + numeros[i]
  }
  return a
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
var a = 0
  for (i=0; i < resultadosTest.length; i++) {
    var a = a + resultadosTest[i]
  }
var prom = a / resultadosTest.length
return prom
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var a = numeros[0];
  for (i=1; i < numeros.length; i++) {
    if (numeros[i] > a){
      a = numeros[i];
    }
  }
  return a;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0){
      return 0
  } 
  var a = 1;
  for (i=0; i < arguments.length; i++){
    a = a * arguments[i]
  }
  return a
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
let nuevoarray = []
  for (i=0; i < arreglo.length; i++){
    if (arreglo[i] > 18){
      nuevoarray.push(arreglo[i])
    }
  }
  return nuevoarray.length
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 7 || numeroDeDia === 1){
    return "Es fin de semana";
  } else if (numeroDeDia > 1 && numeroDeDia < 7 ){
    return "Es dia Laboral";
  }
  return "Error"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var nuevo = n.toString()  // transforma el numero n en string, los parentesis siempre sin nada adentro
  if (nuevo.charAt(0) === "9") { /// también puede ser == 9 ///// string.charAt(i) devuelve el caracter de la posición i del string
    return true
  }
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var a = arreglo[0]
  for (i=0;i<arreglo.length;i++){
    if (arreglo[i] != a) {  // podría haber puesto directamente arreglo[0] en vez de a, y me evito declarar una variable, pero que el loop empiece desde i=1
      return false
    }
  }
  return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let arraynuevo = []
  for (i=0;i<array.length;i++){
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
    // for (j=0;j<arraynuevo.length;j++) creeeeeo
    // if (array[i] != arraynuevo[j])   creeeeeeeo
    arraynuevo.push(array[i])
    } 
  }
  if (arraynuevo.length === 3){
    return arraynuevo
  }
  return "No se encontraron los meses pedidos"
  // si quisiera evitar duplicados, creo que debería hacer un for dentro del primer if
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  for (i=0;i<array.length;i++){
    if (Number.isInteger(array[i]) == false){
      return "Hay numeros inválidos";
    }
  }
  for (i=0;i<array.length;i++){
    if (array[i] <= 0 || array[i] > 200){
      return "Hay numeros inválidos";
    }
  }
  let nuevoarray = []
  for (i=0;i<array.length;i++){
    if (array[i] > 100){
      nuevoarray.push(array[i]);
    }
  }
  return nuevoarray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arraydelnumero = []
  for (i = 0; i < 10; i++){
    numero = numero + 2
    if (numero === i){
    return "Se interrumpió la ejecución" // acá se puede poner break, y la ejecución va a salir del bucle for y continuar con lo que sigue en la función
    }
    arraydelnumero.push(numero)
  }
  return arraydelnumero
  //acá iría lo que sigue después del break. se podría poner un if que calcule si i < 10 (cantidad de interacciónes)
  //si es true ----> return "Se interrumpió la ejecución", si es false ----> return arraydelnumero
  //es más corto lo que hice yo, pero sin usar break
  //el break no interrumpe toda la ejecución completa, simplemente sale del bucle y el interprete sigue leyendo el codigo que sigue
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arr = []
  for (i = 0; i < 10; i++){
    if (i === 5) {
      continue // el statement 'continue' corta la iteración actual y continua con la siguiente
    }          // en este caso corta con la iteración 5 y continua con la siguiente (cuando i === 6)
    numero = numero + 2
    arr.push(numero)
  }
  return arr
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
