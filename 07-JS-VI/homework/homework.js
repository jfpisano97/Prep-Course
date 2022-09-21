// Do not change any of the function names
// asd

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var nuevonombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
  // nuevonombre = nombre[0].toUpperCase() + nombre.slice(1) -----> se puede tomar el caracter de un string igual que podemos tomar el elemento de un array
  return nuevonombre;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb() ; // siempre poner ; punto y coma
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb (n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  function sumar (acumulador, valor){return acumulador + valor} // la función para usar de callback se puede declarar entera antes, o usarla como función anónima en el argumento del .reduce
  var suma = numeros.reduce(sumar); // se puede poner numeros.reduce(sumar,0) para que el valor del acumulador sea 0, si no se pone nada toma el valor del primer elemento del array
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  // se puede hacer con for, o:

  array.forEach(function(elemento,index){cb(elemento)})  
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoarray = array.map(function(elemento){
    return cb(elemento) // cuando se usa .map SIEMPRE hay que retornar algo, porque lo que se retorna es lo que se guarda en la nueva variable, que en este caso es nuevoarray
  });
  return nuevoarray
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoarray = []
  for (i=0;i<array.length;i++){
    var a = array[i].charAt(0).toUpperCase()
    if (a.charAt(0) === "A"){
      nuevoarray.push(array[i])
    }
  }
  return nuevoarray

  // con .filter:



}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
