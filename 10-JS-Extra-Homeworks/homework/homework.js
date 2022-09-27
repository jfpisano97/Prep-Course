// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){ 
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var nuevoarray = []
  var arrayfinal = []
  for (let clave in objeto){
    nuevoarray.push(clave)
    nuevoarray.push(objeto[clave])
    arrayfinal.push(nuevoarray)
    nuevoarray = []
  }
  return arrayfinal
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  //var stringarray = string.split(""); NONONONONONONO NO HACER MÁS ESTO SI NO ES NECESARIO
  var objeto = {};
  for (i=0;i<string.length;i++){
    if (objeto[string[i]] == undefined){           // cuando se recorre todo el string, hay que chequear si hay alguna key que se llame
      objeto[string[i]] = 1;                       // como lo que contiene string[i]. Si está vacía (o sea == undefined), le asignamos
    } else { // por las dudas, siempre usa el else // el valor de 1. Si NO está vacía, quiere decír que ya le estuve sumando algo.
    objeto[string[i]] = objeto[string[i]] + 1;     // entonces a lo que ya tengo le hago +1
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  

  // var stringa = s.split("")
  // var arraynuevo = []

  // no es necesario pasar la string a un array, se puede tomar esa string "como si fuese un array" y tomar cada elemento con su indice

  var mayus = '';
  var minus = '';
  for (let i=0;i<s.length;i++){
    if (s[i] === s[i].toUpperCase()){
      mayus = mayus + s[i]; // esto es como .push(s[i]) si fuese un array, pero como mayus es una string, hay que sumarle lo que ya tiene + lo nuevo
    } 
    else{
    minus = minus + s[i];
  }
}
return (mayus + minus)
}
 


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split(" "); // si se divide con(" ") crea un array con cada palabra de la string (toma el espacio como divisor). si se pone("") sin espacio, no toma divisor, entonces lo divide por cada caracter
  var arrayfinal = [];
  for (i=0;i<array.length;i++){
    var nuevastring = array[i].split("").reverse().join("");
    arrayfinal.push(nuevastring);
    nuevastring = "";
  }
return arrayfinal.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numerohechostring = numero.toString(); //transformo el numero en string para poder reversarlo
  var numerocapicua = numerohechostring.split("").reverse().join(""); // reverso el numero y lo guardo en una variable, que es una string del numero reversado
  if (numerohechostring === numerocapicua){ //comparo el numero hecho string con el numero reversado, a ver si son iguales
    return "Es capicua";
  }
  return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  // ---->    return cadena.replaceAll("a","").replaceAll("b","").replaceAll("c",""); ------> se puede hacer así, con el metodo .replaceAll, que es para strings (busca todos los parametros y los reemplaza por lo que le des)
  // sino hacemos un bucle que transforme el string en un array, chequee index por index y la reemplace
 
 
  var cadenaarray = cadena.split("");
  for (i=0;i<cadenaarray.length;i++){
    if (cadenaarray[i] == "a" || cadenaarray[i] == "b" || cadenaarray[i] == "c"){
      cadenaarray[i] = "";
    }
  }
  return cadenaarray.join("");

  // quizas se podría usar un .forEach, invocando una función con el if que hice arriba
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  // return arr.sort(function(a,b){return a.length - b.length;}); ----------> esto se puede hacer porque así funciona la función que está en el argumento de .sort
  
  // hay que armar un loop que se pueda repetir siempre que algún elemento esté fuera de lugar
  // o sea, siempre que algún elemento i sea mayor a un elemento i+1, se tiene que ejecutar el loop

  var swap = true
  while (swap == true){     // debo hacer que el bucle for se repita hasta que no se pueda cumplir la condición del if
    //                         Para esto, asígno un valor (true) a una variable (swap), 
    //                         y que el bucle se ejecute siempre que esa variable tenga ese valor

    swap = false            // Antes de ejecutar el bucle for, asígno false a la variable swap, para que? si no se cumple nada del for
    //                         la variable va a mantenerse en false, y se va a dejar de ejecutar el loop while


    for (let i=0;i<arr.length -1;i++){  // la condición del if, tengo que evaluarla en cada posición del array (exepto la ultima, porque no se puede comparar con algo siguiente)
      if (arr[i].length > arr[i+1].length){  // todo este if completo, evalua si el elemento i es mayor al elemento i+1
        var x = arr[i];                      // guardando arr[i] en una tercera variable x , puedo hacer una triangulación
        arr[i] = arr[i+1];                   // y finalmente intercambiar los valores de i con i+1
        arr[i+1] = x;
        swap = true;                         // una vez finalizado el if, vuelvo a asignar la condición true a swap, 
      }//                                       para que se vuelva a ejecutar el while, y esto debe hacerse dentro del if si o si
    }//                                         porque sino, swap va a ser true en cada iteración del for, se cumpla el if o no
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  
  var array = [];
  for (i = 0 ; i < arreglo1.length ; i++){  // primero recorro el primer array
    for (j = 0 ; j < arreglo2.length ; j++){  // en cada posición del primer array, se va a ejecutar otro loop
      if (arreglo2[j] === arreglo1[i]){ // y en cada posición de ese loop chequeo si esa posición es igual a la posición en la que se encuentra el primer loop con el primer array
        array.push(arreglo2[j]); // si se cumple, lo pusheo al nuevo array vacío
      }
    }
  }
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

