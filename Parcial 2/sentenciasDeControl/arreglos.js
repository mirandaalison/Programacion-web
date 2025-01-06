/************************************************************************************************************
 *                                             ARREGLOS
 ************************************************************************************************************/

//DECLARACION
const arr = new Array(10);
const arr1 = [];
console.log(arr1);

const numeros = [1, 2, 3, 4, 5];
let colores = ["rojo", "verde", "azul"];


            // //EJERCICIO
            // let videojuegos = ["MarioBros", "Megaman", "Soccer"];
            // console.log({videojuegos});
            // console.log(videojuegos);
            // console.log(videojuegos[0]);

            // let arregloCosas = [ //puedo ingresar:
            //     true,
            //     123,
            //     'Fernando', //string
            //     1 + 2,
            //     function(){} //funciones
            //     ()=>{}, //asiganaciones de funciones
            //     ['5', 'Peliculas'] //array de arrays
            // ]

            // console.log({arregloCosas});
            // console.log(arregloCosas[4]);





//METODOS
//metodos fincionales
//map(), filter(), reduce()


//map() - trsnaforma los elemtnos de un arreglo
//multiplicacion de un valor por si mismo
let numerosMap = [1, 2, 3, 4, 5, 6];
let cuadrados = numerosMap.map(num => num * num);
console.log(cuadrados);

//filter() filtra los elemntos que cumplen algun tipo de condicion
let numerosFilter = [1, 2, 3, 4, 5, 6];
let pares = numerosFilter.filter(num => num%2 !== 0);
console.log(pares);

//reduce() reduce todos los elementos a un solo valor
let numerosReduce =  [1, 2, 70, 4, 5, 6];
let maximo = numerosReduce.reduce((acumulador, num) => (num>acumulador ? num:acumulador), numerosReduce[0]); //uso operadores ternarios para reemplazar if y else en una sola linea
console.log(maximo);







//VENTAJAS
// 1. Son ideales para trabajar con transfromacines y manipulacones complejas de datos dentro de un array
// 2. Permiten un estilo de programcion funcional mas limpia y facil de leer





//AGREGAR ELEMENTOS DENTRO DE UN ARRAY

//push() - agregar uno o más elemntos al final de un arreglo
let p = [1, 2, 3, 4];
p.push(5);
console.log(p);

//unshift() - agerga uno o mas elmentos al inicio del array
let u = [1, 2, 3, 4];
u.unshift(5);
console.log(u);

//splice() - agrega o elimina elementos en cualquier posicion dentro del array
let s = [1, 2, 3, 4];
s.splice(3, 0, 5); //agrega el numero 5 en la posicion 3, el 0 dice que no se eliminan elementos
console.log(s);




//MODIFICAR ELEMENTOS DENTRO DE UN ARRAY

//podemos acceder a un elmento directamnete por su indice y modificarlo
let i = ['Ana', 'Juan', 'Pedro', 'Jose'];
i[2] = 'Maria'; //modifica el elemento en la posicion 2
console.log(i);

//si deseamos modificar el arreglo de forma inmutable, se puede utilizar
//el método map() - crea un nuevo arreglo con los valores modificados
let arrMap = [10, 24, 35, 26];
let arrNuevo = arrMap.map(num => num === 24 ? 5 : num);
console.log(arrNuevo);

//tambien puedo hacerlo con splice()
let z = [1, 2, 3];
z.splice(2, 1, 5); //le digo reemplace el 5 en la posicion 2, el 1 es para reemplazar
console.log(z);





//ELIMINAR ELEMENTOS DENTRO DE UN ARRAY

//pop() - elimina el ultimo elemnto del arreglo
let arrPop = ['azul', 'amarillo', 'rojo', 'negro'];
arrPop.pop();
console.log(arrPop);

//shift() - elimiina el primer elemnto
let arrShift = ['azul', 'amarillo', 'rojo', 'negro'];
arrShift.shift();
console.log(arrShift);

//splice() para eliminar cualuqier elemnto dentro de un arreglo
let arrSplice = ['azul', 'amarillo', 'rojo', 'negro'];
arrSplice.splice(1 ,2); // elimino 2 elemntos de la posicion 1
console.log(arrSplice);