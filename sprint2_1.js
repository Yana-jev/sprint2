"use strict"

//Bloque 1.1: Arrow functions
// Nivel 1 Ejercicio 1
//Conversión de funciones: Tienes una función add que acepta dos parámetros y devuelve su suma. Conviértela en una función de flecha. Por ejemplo:function add(a, b) {return a + b;}.
const add = (a,b) => {return a + b};
console.log(add())

//Nivel 1 Ejercicio 2
//Función de flecha sin parámetros: Crea una función de flecha llamada randomNumber que no necesite parámetros y que devuelva un número aleatorio entre 0 y 100.

const randomNumber = () => {return Math.floor(Math.random() * 100)};
console.log(randomNumber())

//Nivel 1 Ejercicio 3
//Uso de 'this' en las funciones de flecha: Crea una clase person que tenga una propiedad name y una función greet que utilice una función de flecha. La función debe imprimir un saludo que incluya el nombre de la persona. Por ejemplo: console.log(Hola, ${this.name});.

class Person {
   constructor  (name){
      this._name = name
      this.greet = () => `Hello, ${this._name}`


   }
   
   get name(){
      return this._name;
   }

   
}

let firstPerson= new Person("Yana")
console.log(firstPerson.greet())


//Nivel2 Ejercicio 4
//Función de flecha dentro de un loop: Crea una función llamada printNumbers que acepte un array de números y utilice un loop for para imprimir cada número en la consola utilizando una función de flecha.

const arr = [1, 1, 2, 3, 5, 8]

function printNumbers(arr) {
   for (let i = 0; i < arr.length; i++) {
      const printNum = (num) => console.log(num);
      printNum(arr[i]);

   }
}
printNumbers(arr)

//Nivel 3 Ejercicio 5
//Función de flecha con 'setTimeout': Crea una función de flecha que imprima un mensaje en la consola después de esperar 3 segundos.

const sayHello = ()=>{
   console.log("say Hello")
}

setTimeout(sayHello, 3000);

//Bloc 1.2: Operador ternari
// Nivel 1

//Ejercicio 1
//Operador ternario básico: Escribe una función puedeConducir que acepte la edad como parámetro y utilice el operador ternario para determinar si el usuario puede conducir. Si la edad es 18 o más, debe devolver 'Puedes conducir'. Si no, debe devolver 'No puedes conducir'.


function puedeConducir(age){
   let result = document.getElementById('result');
   age = parseInt(document.getElementById('edad').value);
   age >= 18 ? result.innerHTML = 'puede conducir' : result.innerHTML = 'NO puede conducir'

}

//Ejercicio 2
//Uso con operadores de comparación: Escribe una expresión que utilice el operador ternario para determinar cuál de los dos números dados (num1 y num2) es mayor. Si num1 es mayor, devuelve 'num1 es mayor'. Si no, devuelve 'num2 es mayor'.


function compararNumeros(){
   let result = document.getElementById('result_2');
   let num1 = parseInt(document.getElementById('num1').value);
   let num2 = parseInt(document.getElementById('num2').value);
   result.innerHTML = num1 === num2 ? "los números son iguales" : num1 > num2 ? "num1 es mayor" : "num2 es mayor";
}

//Nivel 2 Ejercicio 3
//Uso enlazado de operadores ternarios: Escribe una expresión que utilice enlaces de operadores ternarios para determinar si un número es positivo, negativo o cero.
//Operador ternario con funciones: Crea una función encontrarMaximo que acepte tres parámetros (a, b, c) y utilice el operador ternario para determinar el valor máximo.



const result3 = document.getElementById('result3');

function valorDeNumero(){
   let num = parseInt(document.getElementById('someNumber').value)
   result3.innerHTML = num > 0 ? 'el numero es positivo' : num < 0 ? 'el numero es negativo' : 'el numero es cero'
}

function encontrarMaximo(){
   let a = parseInt(document.getElementById('someNumber1').value);
   let b = parseInt(document.getElementById('someNumber2').value);
   let c = parseInt(document.getElementById('someNumber3').value);
   result3.innerHTML = a > b && a > c ? `El número ${a} es mayor`: b > c ? `El número ${b} es mayor`: `El número ${c} es mayor`;
}

//Nivel 3 Ejercicio 4
//Operador ternario dentro de un bucle: Escribe una función parOImpar que acepte un array de números y utilice un bucle para recorrer el array. Dentro del bucle, utiliza el operador ternario para determinar si cada número es par o impar.

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function parOImpar(){

   for(let i = 0; i < arrayNum.length; i++){
      i % 2 === 0 ? console.log('numero es par') : console.log('numero es impar')
   }
}
parOImpar(arrayNum)

//Bloque 1.3: Callbacks
//Nivel 1
//Ejercicio 1
//Callback básico: Escribe una función llamada procesar que acepte dos parámetros: un número y una función de callback. La función procesar debe invocar la función de callback, pasando el número como parámetro.

function procesar(num, callback){
   return callback(num)
}

function someNumbers(num){
   return num*2
}

console.log(procesar(5, someNumbers))

//Ejercicio 2
//Callbacks con operaciones matemáticas: Escribe una función calculadora que acepte tres parámetros: dos números y una función de callback. La función calculadora debe invocar la función de callback con los dos números como parámetros. Luego, llama calculadora con una función que realice la suma de los dos números.

function calculadora(number1, number2, callback){
   return callback(number1, number2)
}

function suma(number1, number2){
   return number1 + number2

}

console.log(calculadora(100, 200, suma))

//Nivell 2
//Exercici 3
//Uso de callbacks en funciones asíncronas: Escribe una función esperarISaludar que acepte dos parámetros: un nombre y una función de callback. La función debe esperar 2 segundos y entonces invocar la función de callback, pasando el nombre como parámetro.

function  esperarISaludar(nombre, callback){
      setTimeout(() => {callback(nombre);}, 2000)
}

function saludos(nombre){
   console.log(`hi, ${nombre}`)
}

esperarISaludar('I am callback in async function', saludos);


//Ejercicio 4
//Callbacks con arrays: Escribe una función procesarElementos que acepte dos parámetros: un array y una función de callback. La función procesarElements debe invocar la función de callback por cada elemento del array.

function procesarElementos(arr, callback){
for (let i=0; i<arr.length; i++){
   callback(arr[i])
}
}

const array = [110, 20, 30, 40]

function calcaular(numero){
   console.log(`el numero es ${numero}`)
}

procesarElementos(array, calcaular)

//Nivel 3
//Ejercicio 5
//Escribe una función procesarCadena que acepte dos parámetros: una cadena de caracteres y una función de callback. La función procesarCadena debe convertir la cadena a mayúsculas y entonces invocar la función de callback con la cadena transformada.

function procesarCadena(str, callback){
   let strTransform = str.toUpperCase()
   callback(strTransform)
}

const str = ('somos letras mayúsculas')

function someString(str){
   console.log(`la cadena de mayúsculas: ${str}`)
}

procesarCadena(str, someString)

//Bloque 1.4: Rest & Spread operators
//Ejercicio 1
//Operador Spread en Arrays: Crea dos arrays, array1 y array2. Use el operador spread para crear una tercera array que contenga todos los elementos de array1 y array2.

const flora = ['arboles', 'frutos', 'setas', 'flores']
const fauna = ['jabalí', 'ardilla', 'tigre']

const floraYFauna = [...flora, ...fauna]

console.log(floraYFauna)

//Ejercicio 2
//Operador Rest en Funciones: Crea una función 'suma' que utilice el operador rest para aceptar un número indeterminado de argumentos y devolver su suma.

function suma(...numeros) {
      return numeros.reduce((acumulador, num) => acumulador + num, 0);
}


console.log(suma(1, 2, 3));       
console.log(suma(10, 20, 30, 40)); 

//Nivel 2
//Ejercicio 3
//Copiando objetos con Spread: Crea un objeto 'objeto1'. Luego crea un segundo objeto, 'objeto2', que sea una copia de 'objeto1' utilizando el operador spread. Cambia una propiedad de 'objeto2' y comprueba que 'objeto1' no ha cambiado.

const objeto1 = {
   name: 'Ana',
   age: 30

}
let objeto2 = {...objeto1}
console.log(objeto2)
objeto2.name = 'Lisa'
console.log(objeto2)
console.log(objeto1)

//Ejercicio 4
//Resto en Destructuring: Crea un array con varios elementos. Utiliza destructuring y el operador resto para asignar los primeros dos elementos a variables, y después asignar el resto de los elementos a una tercera variable.


const someArray = [1, 2, 3, 4, 5];


const [first, second, ...resto] = someArray;


console.log(first);
console.log(second);
console.log(resto);  


//Nivel 3
//Ejercicio 5
//Spread en Funciones: Crea una función que acepte tres argumentos. Después, crea un array con tres elementos y llama a la función utilizando el operador spread con esa array.




function elementsFuncion(el1, el2, el3) {
   console.log(`element_1: ${el1}`);
   console.log(`element_2: ${el2}`);
   console.log(`element_3: ${el3}`);
}


const tresElementos = ['one', 'two', 'three']


elementsFuncion(...tresElementos);



//Ejercicio 6
//Fusionando Objetos con Spread: Crea dos objetos con propiedades distintas. Utiliza el operador spread para fusionar estos dos objetos en uno nuevo.


let object1 = {
   marca: 'hp',
   year: 2024,
   garantía: '5 años'
}

let object2 = {
   color: 'black',
   peso: '0.9 kg'

}

const object3 = {...object1, ...object2}
console.log(object3)

//Bloque 1.5: Array transformations
//Nivel 1
//Ejercicio 1
//Map: Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que contenga el cuadrado de cada número

const arrNumeros = [1, 2, 3, 4]

const numerosCudarados = arrNumeros.map(el => el **2)

console.log(numerosCudarados)

//Ejercicio 2
//Filtero: Tiene un array de números [1, 2, 3, 4]. Crea una nueva array que sólo contenga los números pares.

const arrayDeNumeros = [1, 2, 3, 4]

const numerosPares = arrayDeNumeros.filter( (num) => num % 2 === 0 );

console.log(numerosPares)

//Ejercicio 3
//Find: Tiene un array de números [1, 10 , 8, 11]. Use la función find para encontrar el primer número que es mayor a 10

const arrayConNumeros = [1, 10 , 8, 11]

const numeroMayorQueDiez = arrayConNumeros.find(numero => numero > 10);

console.log(numeroMayorQueDiez)

//Ejercicio 4
//Reducción: Tiene un array de números [13, 7, 8, 21]. Utiliza la función reduccion para calcular la suma total de los números.

const arrReduction = [13, 7, 8, 21];

const sumar = arrReduction.reduce( (accum, value) =>  accum + value, 0 )
console.log(sumar)


//Nivel 2
//Ejercicio 5
//Dado un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una función en una sola línea que haga lo siguiente:
//Filtra los números mayores o iguales a 10.
//Multiplica cada número filtrado por 2.
//Calcula la suma de los números filtrados y multiplicados por 2.
//La función debe devolver el resultado de la suma.

const numeros = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const someValue = arr => arr.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);

const resultado = someValue(numeros);
console.log(resultado); 

//Nivel 3
//Ejercicio 6
//Every / Some: Usa every y some para determinar si todos o algunos de los elementos del array [11, 12, 13, 14] son ​​mayores que 10, respectivamente

const array5 = [11, 12, 13, 14]; 

const mayorQue10 = array5.every((element) => element > 10)
console.log(mayorQue10)

const someMayorQue10 = array5.some( (element) => element > 10);
console.log(someMayorQue10)

//Bloque 1.6: Array loops
//Nivel 1
//Ejercicio 1
//forEach: Tiene un array de nombres. Utiliza forEach para imprimir cada nombre en la consola: let nombres = ['Anna', 'Bernat', 'Clara'];

let nombres = ['Anna', 'Bernat', 'Clara']
nombres.forEach((element) => console.log(element)  )

//Ejercicio 2
//for-of: Tiene un array de nombres. Utiliza un bucle for-of para imprimir cada nombre en la consola: let noms = ['Anna', 'Bernat', 'Clara'];

let noms = ['Anna', 'Bernat', 'Clara'];
for (const value of noms) {
   console.log(value);
}

//Ejercicio 3
//filtro: Tiene un array de números. Use filtro para crear una nueva array que sólo contenga los números pares. let numeros = [1, 2, 3, 4, 5, 6];

let numeros2 = [1, 2, 3, 4, 5, 6]
const numeros3 = numeros2.filter((num)=> num % 2 === 0 )
console.log(numeros3)


//Nivel 2
//Ejercicio 4
//for-in: Tiene un objeto con pares clave-valor: let obj = { nombre: Ola, edad: 25, ciudad: 'Barcelona' }; Use un bucle for-in para imprimir en la consola cada clave y su valor correspondiente.

let obj = { nombre: 'Ola', edad: 25, ciudad: 'Barcelona' };


   for (let clave in obj) {
      if (obj.hasOwnProperty(clave)) { 
         console.log(`${clave}: ${obj[clave]}`);
      }
   }

   

//Ejercicio 5
//for-of con break: Tiene un array de números. Utiliza un bucle for-of para imprimir en la consola los números hasta encontrar el número 5, entonces detiene el bucle: let numeros = [1, 2, 3, 4, 5, 6];

let numeros4 = [1, 2, 3, 4, 5, 6];

for (let value of numeros4) {
   if (value == 5) {
      break;
   }
   console.log(value);
}


 //Nivel 3
//Ejercicio 6
//for-of con index: Utiliza un bucle for-of para imprimir en la consola cada elemento del array y su posición (index): let noms = ['Anna', 'Bernat', 'Clara']

let noms2 = ['Anna', 'Bernat', 'Clara'];

for (let [index, value] of noms2.entries()) {
   console.log(`${index}: ${value}`);
}


//Bloque 1.7: Promisas & Async/Await

//Nivel 1
//Ejercicio 1
//Creación de una Promesa: Crea una promesa que se resuelva después de 2 segundos y que devuelva la cadena de texto 'Hola, mundo'.


   const miPromesa = new Promise((resolve, reject) => {
      
      setTimeout(() => {
      
      resolve('Hola, mundo');
      }, 2000); 
   });
   


   //Ejercicio 2
//Utilización de una Promesa: Utiliza la promesa creada en el ejercicio anterior. Crea un .then que imprima el resultado en la consola.

miPromesa.then((mensaje) => {
   console.log(mensaje);
});

//Ejercicio 3
//Promesa con reject: Crea una promesa que se resuelva después de 2 segundos si el input es igual a 'Hola', y que la rechace si el input es cualquier otra cosa


   function verificarInput(input) {
      return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (input === 'Hola') {
            resolve('Input es correcto');
         } else {
            reject('Input es incorrecto');
         }
      }, 2000);
      });
   }
   
   verificarInput('Hola').then((mensaje) => {
      console.log(mensaje);
   }).catch((error) => {
      console.error(error);
   });
   
//Ejercicio 4
//Uso de async/await: Escribe una función asíncrona que utilice la función await para esperar el resultado de la promesa creada en el ejercicio 1, y que después imprima este resultado en la consola.

   const miPromesa2 = new Promise((resolve, reject) => {
      setTimeout(() => {
      resolve('Hola! Soy Ejercicio 4 Bloque 1.7');
      }, 2000);
   });


async function imprimirResultado() {

   const resultado = await miPromesa2;

   console.log(resultado); 
}


//Nivel 2
//Ejercicio 5
//Gestión de errores con async/await: Modifica la función del ejercicio 4 para que capture cualquier posible error utilizando un blog try/catch.
async function imprimirResultado() {
   try {
   
   const resultado = await miPromesa2;
   
   console.log(resultado);
   } catch (error) {

   console.error('error:', error);
   }
}
imprimirResultado()
//Nivel 3
//Ejercicio 6
//Promise.all: Crea dos promesas que se resuelvan después de 2 y 3 segundos, respectivamente. Use Promise.all para esperar que ambas promesas se resuelvan, e imprime los resultados en la consola.


const promesa1 = new Promise((resolve, reject) => {
   setTimeout(() => {
   resolve('Primera promesa');
   }, 2000);
});


const promesa2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Segunda promesa');
   }, 3000);
});


Promise.all([promesa1, promesa2])
   .then((resultados) => {
      console.log('Resultados:', resultados);
   })
   .catch((error) => {
      console.error('un error:', error);
   });
