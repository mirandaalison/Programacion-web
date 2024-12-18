var nombre = "Alison";
var edad;
edad = 20;
var apellido = "Miranda";
console.log("Mi nombre es " + nombre + " " + apellido);
console.log("Mi edad es " + edad);
console.log("Mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años");

let x = 10;
let y = 20;
let z = x+y;
console.log(z);


// var declara una variable global
// let declara una variable local o tmb una variable de bloque (que va a sr tuizada soolo en un bloque)
// const declara una variable que no cambia su valor

// if marca un vlbowur fr inrcicones que se ejecuan si una conducion se cumple
//switch
// for
// while

// function - marca un vlqoue de instrucciones ques e ejcutan varias veces se decalra
// try catch

//throw - cuando se produce un error

//return




//                                          ejemplos de tipos de datos de JavaScript

// string - declaro var == undeprecated, obsoleto - let == moderno - const == moderno
// ejemplo 2 tipos declraciones
let nombrePersona = "Ricardo";
console.log(nombrePersona);

let nombrePersona;
nombrePersona = "Rucardo";
console.log(nombrePersona);


//tipo de dato numerico
let numero = 1000;
console.log(numero);

//tipo de dato objeto
//uso ":" para asigancion
let persona = {
    nombre : "Ricardo";
    apellido : "Vargas";
    edad : 25;
}

console.log(persona);



//tipo de dato typeof
let let1 = "Ricardo";
console.log(typeof let1); // toma como string

let let2 = 25;
console.log(typeof let2); //toma como number

let let3 = false;
console.log(typeof let3); // toma como boolean

let let4 = BigInt(123);
console.log(typeof let4); // toma como big int

let let5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(typeof let5); // le toma como tipo de dato object


//tipo de dato function
function saludar(){
    console.log(typeof saludar); // toma como function
}

//tipo de dato symbol
let simbolo = Symbol("mi simbolo"); // se usa como identificador, para info unica


//tipo de dato class
// lo mismo que una funcion
class Persona{
    constructor(nombres, apellido, edad){ //atributos, constructor
        this.nombres = nombres; //propiedades: atributos
        this.apellidos = apellidos;
        this.edad = edad;
    }
}


//tipo de dato undefined
//se puede utilizar como valor, aun no lo defino
let variable;
console.log(variable);
console.log(typeof variable);



//tipo de dato null
//que hay ausencia de valor, no hay valor
//no tiene tipo null sino onject
let variable1 = null;
console.log(variable1);
console.log(typeof variable1);


//tipo de dato de arreglos en JavaScript
let autos = ["bmw", "mercedes", "audi"];
console.log(autos);
console.log(typeof autos); // devuleve object


//tipo de datos generados por cadenas vacias
let cadenaVacia = "";
console.log(cadenaVacia);
console.log(typeof cadenaVacia); // devuelve string





//                                          REGLAS DE JAVSCRIPT PARA DECLARAR VARIABLES
// no se puede inciar con numeros, simbolos, matusculas

//formas correctas de declarar  variables
let nombresCompletos = "Ricardo Vargas";
let nombres_completos = "Ricardo Vargas";
let $nombresCompletos = "Ricardo Vargas";
let _nombresCompletos = "Ricardo Vargas";
let nombresCompletos_ = "Ricardo Vargas";


//-----------------------------------------------------------------------------------------------------------------------------------------------------
//                                                      OPERADORES EN JavaScript
//-----------------------------------------------------------------------------------------------------------------------------------------------------

//operadores aritmeticos
//suma, resta, mutipllicacion, division, modulo, eponencia, 
let numero1 = 10;
let numero2 = 5;
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);
console.log(numero1 ** numero2);




//operadores de incremento y decremento
let numero3 = 3, numero4 = 2;
let numero5 = numero3 + numero4;

//incremento
    //preincremento
    //va antes de la variable, incremento valor antes de ser asignado a la variable, 
    numero5 = ++numero3;
    console.log(numero3); // salida 4 
    console.log(numero5); // salida 4

    //postincreemnto
    //va despues de la variable, aun no se asigna ni se incrementa, operador ++ despues de la variable
    numero5 = numero4++;
    console.log(numero4); // salida 3
    console.log(numero5); // salida 2

//decremento
    //predecremento
    //va antes de la variable, incremento valor antes de ser asignado a la variable, 
    numero5 = --numero3;
    console.log(numero3); // salida 3
    console.log(numero5); // salida 3

    //postdecremento
    //va despues de la variable, aun no se asigna ni se incrementa, operador ++ despues de la variable
    numero5 = numero4--;
    console.log(numero4); // salida 2
    console.log(numero5); // salida 3





//precedencia de operadores
// se ejecutan de izuiqerda a derecha o de derecha a izquierad segun sea el caso
//llamar funcon i a d
let pre1 = 2, pre2 = 3, pre3 = 4, pre4 = 5;
let pre5 = (pre1 + pre2) * pre3;
console.log(pre5); //20

let pre6 = pre3 * (pre1 + pre2):
console.log(pre6); //20

let pre5 = pre1 + pre2 * pre3;
console.log(pre6); //14



//operadores de asignacion
// =, +=, -=, *=, /=, **=, etc

let op1 = 3, op2 = 2;
op1 += op2;
console.log(op1); //5
op1 -= op2;
console.log(op1); //3


//operadores de comparacion
//igual == - no es estrictamente que sean del mismo tipo
//=== comparar si son iguales y dle mismo tipo
//distinto !=, >, <, >=, <=

let op3 = 3, op4 ="3";
let op10 = op3 == op4;
console.log(op10); //true

let op11 = op3 === op4;
console.log(op11); //false

if(op3 === op4){
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}



//DETERMINAR SI UN NUMERO ES PAR O IMPAR
let op20=10;
res = op20 % 2;
if(res == 0){
    console.log("es par");
}else{
    console.log("es impar");
}


//DETERMINAR SI UNA PERSONA E SMAYOR DE EDAD O NO
let op21 = 19;
if(op21 >= 18){
     console.log("es mayor");
}else{
    console.log("no e smayor");
}


//DE UN CONJUNTO DE VALORES [12, 14, 14, 15, 16, ...] de 10 valores determinar cuantos son pares e impares

let valores = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
let sumaPares, sumaImpares;
let i;
for(i = 1; i <= 10; i++){
    res = valores[i] % 2;
    if(res == 0){
        sumaPares += 1;
    }else{
        sumaImpares += 1;
    }
}
console.log("NumerosPares: " + sumaPares + " numerosImpares" + sumaImpares);







//Operadores logicos
// and &&, or ||, not !

let s = 12;
let valMin = 12, valorMax = 20;
if(s >= valMin && s <= valorMax){
    console.log("valor dentro del rango");
}else{
    console.log("valor NO dentro del rango");
}

if(s >= valMin || s <= valorMax){
    console.log("valor dentro del rango");
}else{
    console.log("valor NO dentro del rango");
}




//operadores ternarios
let resultado = (s >= valMin && s <= valorMax) ? "El valor esta dentro del rango" : "el valor no esta dentro del rango";
console.log(resultado);





//-----------------------------------------------------------------------------------------------------------------------------------------------------
//                                                     Conversion de tipos
//-----------------------------------------------------------------------------------------------------------------------------------------------------

let num1 = "20";
console.log(typeof num1);

let num2 = Number(num1);
console.log(typeof num2);
console.log(num2);

let num3 = parseInt(num1);
console.log(typeof num3);
console.log(num3);


//parseInt() - convierte un string a entero (sin decimales)
//Number - valor en numero (puede ser entero o flotante)

console.log(parseInt("42px")); // solo la parte numerica convierte en entero // sale 42
console.log(parseInt(3.1416)); // solo la parte entera convierte en entero // sale 3
console.log(parseInt("1abc")); // no hya numeros para convertir // sale NaN // ya poniendo el 1 sale 1

console.log(Number("42px")); // no se puede convertir toda la cadena // sale NaN
console.log(Number(3.1416)); // convierte numero en float // sale 3.1416
console.log(Number("abc")); // no hay numeros en la cadena // sale NaN
console.log(Number("1")); // sale 1

console.log(Number(true)); // sale 1
console.log(Number(false)); // sale 0
console.log(Number(null)); // sale 0
console.log(Number(undefined)); // sale NaN


if(isNaN(num2)){
    console.log("no es un #");
}else {
    console.log("si es un #"); //si es un #
}
console.log(isNaN(num2)); //false
console.log(num2); //20



