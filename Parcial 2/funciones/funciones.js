/************************************************************************************************************
 *                                            FUNCIONES EN JAVASCRIPT
 ************************************************************************************************************/


//Funcion declaracion
function miFuncion(a, b){ //declaro funcin con parametros
    console.log(arguments.length)
    console.log('la suma es: ' + (a + b));
}
miFuncion(2, 3); //llamo a funcion con argumentos



//palabra return dentro de funcion
function miReturn(a, b){
    return a + b;
}
let resultado = miReturn(4, 5);
console.log(resultado);



//funciones de tipo expresion
//declaracion de una funcion que es igual a una expresion
let sumar = function(a, b) {return a * b}; // una varibale una funcion con 2 parametros, retorno una operacion, contiene 2 parametros
resultado = sumar(2, 4); // envio 2 argumentos
console.log(typeof sumar);
console.log(resultado);



//funciones de tipo self-invoking
//pq son funciones que se llaman a sí mismas, tambien conocidas como funciones anonimas, no muy comunes pero pueden ser utiles en algunos casos
// puedo utilizar cuando cargue un programa por primera vez, se ejecuta una sola vez la funcion, y no puede ser llamada
(function (a, b) {
    console.log('ejecutando la funcion: ' + (a + b));
}) (3, 4); 



//funciones anónimas
//no son muy utiles pero puede ser utiles en algunos casos
setTimeout(function () {
    console.log('hola desde una funcion anonima');
}, 5000); // me muestra el mensaje despues de 5 segundos



const persona = {
    nombre: 'Alison',
    saludar(){
        return `Hola, soy ${this.nombre}`; //interpolo para acceder a elemento mediante $, y uso `` esas comillas, no '' para interpolar
    },
    apellido: 'Miranda'
}

console.log(persona.saludar());



//funciones tipo flecha o arrow function
// se mantiene como una fomra concisa de declarar funciones y es ampliamente usada
// aqui ya no aplica la palabra reservada "function" y el uso de llaves
const sumarValores = (x, y) => x + y;
console.log(sumarValores(5,7));

//manejo de multiples funciones dentro de una misma funcion
const operaciones = { sumar: (a, b) => a + b, restar: (a, b) => a - b, multiplicar: (a, b) => a * b, dividir: (a, b) => a / b};
console.log(operaciones.sumar(1, 1));
console.log(operaciones.restar(1, 1));
console.log(operaciones.multiplicar(1, 1));
console.log(operaciones.dividir(1, 1));

