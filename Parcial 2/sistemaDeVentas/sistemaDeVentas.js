// Sistema de Ventas

// CREACION DE LA CLASE Producto
class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, stock, categoria) { 
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock; 
        this._categoria = categoria;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        if (precio < 0) {
            console.log("El precio no debe ser negativo");
        }
    }

    get stock() {
        return this._stock;
    }

    set stock(stock) {
        this._stock = stock;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}, stock: ${this._stock}, categoria: ${this._categoria}`;
    }
}

// PROBANDO
let producto1 = new Producto('Pantalon', 200, 10, 'ropa');
let producto2 = new Producto('Vestido', 300, 10, 'ropa');
console.log(producto1.toString());
console.log(producto2.toString());



// CREACION DE LA CLASE Orden
class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes; // no hago herencia, hago heredación
        this._productos = []; // asigno arreglo vacío
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        // verificar si no hemos superado el maximo de productos existentes
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            // otra sintaxis
            // this._productos[this._contadorProductosAgregados++] = producto;
        }else{
            console.log('No se pueden agregar más productos a la orden');
        }
    }

    venderProducto(producto, cantidad) {
        if (producto.stock >= cantidad) {
            producto.stock -= cantidad; 
            console.log(`Producto vendido`);
        } else {
            console.log(`No hay stock suficiente para vender`);
        }
    }

    calcularTotal() {
        let totalVenta = 0;

        for (const producto of this._productos) {
            if (producto.categoria === 'electronica') {
                totalVenta += producto.precio * 0.9; 
            } else {
                totalVenta += producto.precio;
            }
        }

        return totalVenta; 
    }

    calcularImpuestos(){
        const totalVenta = this.calcularTotal();
        let totalFinalVenta = totalVenta * 0.16;
        return totalFinalVenta;
    }

    mostrarOrden(){
        this._productos.sort((a, b) => b.precio - a.precio);
        let productosOrden = '';
        for (const producto of this._productos){
            productosOrden += '\n{' + producto.toString() + '}\n';  // tenemos varios productos
        }
        console.log(`Orden: ${this._idOrden}, Total (con impuestos): $${this.calcularImpuestos()}, Productos: ${productosOrden}`)
    }
}


// PROBAMOS
let producto3 = new Producto('Leptop', 500, 10, 'electronica');
let producto4 = new Producto('Mouse', 10, 10, 'electronica');

let orden1 = new Orden();
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.mostrarOrden();

let orden2 = new Orden(); // creo un segundo objeto de tipo Orden
let producto5 = new Producto('Teclado', 150, 10, 'electronica');
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto5);
orden2.venderProducto(producto1, 11);
orden2.mostrarOrden();



//EJERCICIO RETO

// 1. que el stock disminuya
// 2. descuento por categoría - creo nueva propiedad categoria en clase Producto
//        los productos de la categoria Electronica deben tener un descuento del 10% al calcular el total de la venta
// 3. aplicacion de impuestos
//        implemnetar un metodo calcularImpuestos() en la clase orden para que agregue impuesto 16%
// 4. listar los productos de forma descendente
// 5. Restriccion adicional 
//        aseguremos que los precios no pueden ser negativos al establecerlos en la clase Producto
















// Modificador denonminado STATIC 
// se utiliza para acceder directamente a traves de la clase 

// los metodos o propiedades estaticas (static) no requieren que se creen una instancia de la clase para ser utilizados

//              class Calculadora{
//                                                                     metodo estatico
//                    static sumar(a, b){
//                      return a + b;
//                    }
//              }

// el acceso al metodo estatico directamente de la clase es así
//              console.log(Calculadora.sumar(5, 3));


// lo que no se puede es acceder a una instancia de esta forma
// no puedo llamar a traves de una asiganción, o una instancia especifica
//              const calc = new Calculadora();
//              console.log(calc.sumar(5, 3));

// el modficiador estatic en js es una herramienta clave para definir funciones y propiedades 
// compartidas sin necesidad de crear algun tipo de instancia de la clase