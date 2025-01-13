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








//METODOS GET EN OBJETOS JS
// Metodos que se usan a manera de buenas practicas 
// que permiten acceder y modificar dichos objetos
// acceder a los valores de las propiedades
let personaGET = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    email: 'mvaldiviezo@gmail.com',
    edad: 23,
    get nombreCompleto(){ // no es una propiedad, es ahora un metodo GET, no devulce funcion, ahora devuelve metodo
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaGET.nombreCompleto);



//METODOS SET EN OBJETOS DE JS
// establece o modifica los valores de los atributos de los objetos

//validacion
let personaSET = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    email: 'mvaldiviezo@gmail.com',
    edad: 23,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto(){ // no es una propiedad, es ahora un metodo GET, no devulce funcion, ahora devuelve metodo
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaSET.lang);




//Set
let personaSET2 = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    email: 'mvaldiviezo@gmail.com',
    edad: 23,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){ // no es una propiedad, es ahora un metodo GET, no devulce funcion, ahora devuelve metodo
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaSET2.lang); // aqui uso el get

personaSET2.lang = 'en'; // para usar el set le mando un dato y llamo a la funcion
console.log(personaSET2.lang);






//CONSTRUCTORES EN JS
// si se desea crear mas objetos del mismo tipo esto NO ES POSIBLE
// es por esllo que se crean los constructores

// es una funcion espeacial que permite trabajar con objetos en JS

//funcion constructora de tipo persona
function PersonaFC(nombre, apellido, email){
    this.nombre = nombre; //izq propiedades, derecha valores
    this.apellido = apellido;
    this.email = email;
}

let padreFC = new personaFC = new PersonaFC('Juan', 'Sanchez', 'jsanchez@gamil.com'); // la variable ya no es variable, ahora es un metodo que permite crear un obejto de tipo persona
console.log(padreFC);

let madreFC = new personaFC = new PersonaFC('Laura', 'Moya', 'lmoya@gamil.com');
console.log(madreFC);

padreFC.tlf = '2587414'; //agrega propiedad SOLO al obejto que se cree

console.log(padreFC);
console.log(madreFC);






//agregar un metodo a una funcion constructora de objetos
function PersonaFCM(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){ // no es una propiedad, es ahora un metodo GET, no devulce funcion, ahora devuelve metodo
        return this.nombre + ' ' + this.apellido;
    }
}

let padreFCM = new PersonaFCM('Juan', 'Sanchez', 'jsanchez');
console.log(padreFCM.nombreCompleto());

let madreFCM = new PersonaFCM('Laura', 'MOya', 'lmoya');
console.log(padreFCM.nombreCompleto());


//uso de prototype, agrega propiedad a TODOS lso obejtos que se creen
PersonaFCM.prototype.telefono = '2478555';

console.log(padreFCM.nombreCompleto());
console.log(madreFCM.nombreCompleto());


//uso de CALL
let personaCall1 = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let personaCall2 = {
    nombre: 'Andres',
    apellido: 'Farias',
}

// para usar el metodo nombreCompleto que pertenece al objeto personaCall1
// con los datos del obejto que está en personaCall2

console.log(personaCall1.nombreCompleto);

console.log(personaCall1.nombreCompleto.call(personaCall2));


// como pasar parametros a traves del metodo call
let personaCallParam1 = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    nombreCompleto : function(titulo, telefono){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + telefono; // no pongo this en telefono ni titulo pq estoy accediendo a valor fuera del objeto
    }
}

let personaCallParam2 = {
    nombre: 'Andres',
    apellido: 'Farias',
}

console.log(personaCallParam1.nombreCompleto('Lic.', '1247855'));
console.log(personaCallParam1.nombreCompleto.call(personaCall2('Ing.', '5578555')));






//uso del metodo apply
let personaApply1 = {
    nombre: 'Diego',
    apellido: 'Salas',
    nombreCompleto : function(titulo, telefono){
        return this.nombre + ' ' + this.apellido;
}

let personaApply2 = {
    nombre: 'Andres',
    apellido: 'Farias',
}

console.log(personaApply1.nombreCompleto());
console.log(personaApply1.nombreCompleto.apply(personaApply2));

let arreglo = ['Ing.', '8645624565']

console.log(personaApply1.nombreCompleto.apply(personaApply2, arreglo)); //se diferencia del call el apply por la forma de enviar argumentos
console.log(personaApply1.nombreCompleto.apply(personaApply2, ['Ing.', '8645624565'])); // tmb puedo enviar de esta manera





