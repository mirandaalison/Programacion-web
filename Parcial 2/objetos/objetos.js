/************************************************************************************************************
 *                                            OBJETOS
 ************************************************************************************************************/


//CARACTERISTICAS PRINCIPALES DE OBETOS EN JS

//CLAVES Y VALORES
// claves son cadenas o simbolos (unicos)
// los valores pueden ser de cualquier tipo: numeros, cadenas, funciones,   otros tipos de objetos, etc


//DINAMISMO
// los objetos pueden modificarse en tiempo de ejecucion, pueden agregar, modificar o eliminar propiedades de un object

// nota: dentro de los objetos se pueden incluir métodos, pues los métodos son funciones asociados a un objeto

// los objetos contienen propiedades y métodos

//ocupo esta forma cuando conoxco todas las propiedades
let persona = { // clave sería nombre, apellido, etc y los valores serían juan, perez, etc ; creo objeto directo en memoria
    nombre: 'Juan', 
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 35
}

console.log(persona);



//incluir metodos en los objetos
//forma 1
let people = { 
    name: 'Andy',
    lastname: 'Smith',
    age: 34,
    fullName: function (){
        return this.name + ' ' + this.lastname;
    }
}

console.log(people.fullName()); // para acceder a atributos pongo solo .name pero si quiero metodo necesito poner el () ejem .name()


//forma 2
const people2 = {
    name: 'Mary',
    lastname: 'Dalas',
    age: 22,
    saludo: function (){
        console.log(`Hello, my name is ${this.name}`);
    }
}

console.log(people2.name);
people2.saludo();


//usando el constructor Object
// otra forma de crear un objeto vacio y agregarle propiedades posterioirmente

//utilizo esta forma cuando hay dinamimso y no conozco las propiedades que van a hacer uso de este objeto uso este método
const persona1 = new Object();
persona1.nombre = 'Maria';
persona1.apellido = 'Velez';
persona1.saludar = function (){
    console.log(`Hola, mi nombre es ${this.nombre}`);
};

console.log(persona1.nombre);
persona1.saludar();





//usando la clase Object.create()
//esta forma permite crear un objeto basado en un prototipo 
const prototipoPersona = { // hago que objeto se asocie a propiedad (en este caso nombre)
    saludar: function (){ 
        console.log(`Hola desde prototipo, soy ${this.nombre}`); // nombre queda en el limbo, osea no se que va a ser asignado todavía, no conozco que se va a enviar
    }
}

const persona2 = Object.create(prototipoPersona); // primero creo objeto en memoria (Object) pero queda vacío (create) y asigno un prototipoPersona para que sepa que asignar
persona2.nombre = 'Carlos';
persona2.saludar();




//usando clases (introducido desde ES6 ==> ES2024)
// lo que hace es proporcinar una sintaxis más estructurada para crear objetos
//declaro objeto a partir de clase
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        console.log(`Hola desde class, soy ${this.nombre}`);
    }
}

const persona3 = new Persona('Ana', 'Rios');
persona3.saludar(); //envio info internamente




//usando funciones constructoras
//forma clasica, utilizada no muy recuentemenete
function Persona1(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log(`Hola desde funciones constructoras, soy ${this.nombre}`);
    }
}

const persona4 = new Persona1('Luis', 45);
persona4.saludar();






//manipulacion de los datos o propiedades de los objetos
// 1. agregar o modificar propiedades
const persona5 = {
    nombre: 'Pedro'
};
persona5.edad = 34;
persona5.nombre = 'Pedro Martinez';

console.log(persona5); // toma el ultimo valor válido para asumir como criterio


// 2. eliminar propiedades
delete persona5.edad;

console.log(persona5);


// 3. iterar sobre las propiedades del objeto
// me devuelve las propiedades DIRECTAMENTE
persona5.edad = 40; // para insertar edad otra vez pq hace un rato eliminé la edad
for(nombrePropiedad in persona5){
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad]);
}

for(let clave in persona5){ 
    console.log(`${clave}: ${persona5[clave]}`);
}


// 4. para verificar propiedades
console.log('name' in persona5); // consulta o verifica si la prpiedad name está en persona5, por eso da false
console.log('nombre' in persona5); // nombre si hay en persona5

console.log(persona5.hasOwnProperty('age')); // quiere decir que ya automaticamnete me valida si age es propiedad de persona5
console.log(persona5.hasOwnProperty('nombre')); // nombre si hay




//METODOS UTILES PARA TRABJAR CON OBJETOS
// 1. Object.keys()
// devuelve un ARRAY con las claves (osea las propiedades) del objeto
console.log(Object.keys(persona5));

// 2. Object.values()
// devuelve un array con los valores del objeto
console.log(Object.values(persona5));

// 3. Object.entries()
// devuelve un array de pares [claves, valores]
console.log(Object.entries(persona5));


// 4. Object.assign()
// copia las porpiedades de un objeto a otro
const copia = Object.assign({}, persona5);
console.log(copia);


// 5. Object.freeze()
// congela un objeto para evitar posibles modificaciones de alguna propiedad en algun momento
Object.freeze(persona5);


// 6. Object.seal()
// permite modificar propiedades exitentes, pero no agregar o eliminar propiedades
Object.seal(persona5);


persona5.direccion = 'Quito'; // no deberia dejarme agregar
console.log(persona5);






//Nota:
//impresion de los valores de las propiedades de un objeto
let personaArray = Object.values(persona5);
console.log(personaArray);

//JSON es una notacion, es un objeto
//stringify lo que hace es convertir a cadena o string cada propiedad
let personaString = JSON.stringify(persona5);
console.log(personaString);





