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