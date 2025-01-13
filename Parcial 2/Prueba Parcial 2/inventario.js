class Inventario {  // maneja los productos
    constructor() {
        this._productos = [
            { nombre: 'res', precio: 2, cantidad: 12, categoria: 'carne' },
            { nombre: 'pollo', precio: 3, cantidad: 13, categoria: 'carne' },
            { nombre: 'cerdo', precio: 4, cantidad: 14, categoria: 'carne' },
            { nombre: 'pescado', precio: 5, cantidad: 15, categoria: 'mariscos' }
        ];
    }

    get productos() { // para obtener los productos dado al encapsulameinto
        return this._productos;
    }

    anadirProducto(producto) {
        this._productos.push(producto);
    }

    listarProductos(orden) {
        for (let i = 0; i < this._productos.length - 1; i++) {
            for (let j = 0; j < this._productos.length - 1 - i; j++) {
                if (
                    (orden === 'ascendente' && this._productos[j].precio > this._productos[j + 1].precio) || (orden === 'descendente' && this._productos[j].precio < this._productos[j + 1].precio)
                ) {
                    let temporal = this._productos[j];
                    this._productos[j] = this._productos[j + 1];
                    this._productos[j + 1] = temporal;
                }
            }
        }
        console.log('Productos ordenados:', this._productos);
    }

    filtrarPorCategoria(categoria) {
        let filtrados = this._productos.filter(producto => producto.categoria === categoria);
        console.log('Productos en la categoría', categoria, ': ', filtrados);
    }

    encontrarProducto(nombreProducto) {
        return this._productos.find(producto => producto.nombre === nombreProducto);
    }
}

const inventario = new Inventario();

class RealizarVenta {
    constructor(inventario) {
        this.ventasRealizadas = [];
        this.inventario = inventario;
    }

    get ventas() { // para tener las ventas realizadas
        return this.ventasRealizadas;
    }

    set ventas(ventas) { // para modificar las ventas realizadas
        if (Array.isArray(ventas)) {
            this.ventasRealizadas = ventas;
        } else {
            console.log("No es válido el valor");
        }
    }

    realizarVenta(nombreProducto, cantidad) {
        const producto = this.inventario.encontrarProducto(nombreProducto);  

        if (!producto) {
            console.log('El producto no existe');
            return;
        }

        if (producto.cantidad >= cantidad) { 
            producto.cantidad -= cantidad; // reduzco el stock del producto
            this.ventasRealizadas.push({
                producto: nombreProducto,
                cantidad: cantidad,
                total: producto.precio * cantidad,
                fecha: new Date().toLocaleString(),
            });
            console.log('Venta realizada:', nombreProducto, '- Cantidad: ', cantidad);
        } else {
            console.log('No hay stock suficiente para', nombreProducto);
        }
    }

    mostrarVentas() {
        console.log('Ventas realizadas:', this.ventasRealizadas);
    }

    generarReporte() {
        let ingresosTotales = 0;
        let productoMasVendido = null;
        let cantidadesVendidas = {};

        for (let i = 0; i < this.ventasRealizadas.length; i++) { // calculo ingresos totales y cuantos se vendieron
            ingresosTotales += this.ventasRealizadas[i].total;
        
            if (!cantidadesVendidas[this.ventasRealizadas[i].producto]) {
                cantidadesVendidas[this.ventasRealizadas[i].producto] = 0;
            }
            cantidadesVendidas[this.ventasRealizadas[i].producto] += this.ventasRealizadas[i].cantidad;
        }
        
        for (let producto in cantidadesVendidas) { // comparo segun lo vendido para ver cual es el producto ma svendido
            if (!productoMasVendido || cantidadesVendidas[producto] > cantidadesVendidas[productoMasVendido]) {
                productoMasVendido = producto;
            }
        }

        console.log('------ REPORTE GENERAL -----');
        console.log('Ventas realizadas:', this.ventasRealizadas);
        console.log('Ingresos totales:', ingresosTotales);
        console.log('Producto más vendido:', productoMasVendido);
    }
}

const ventas = new RealizarVenta(inventario);

//aplicarDescuento le hice autoejecutable porque se aplica una sola vez
(function aplicarDescuento(categoria, porcentaje) {
    for (let i = 0; i < inventario.productos.length; i++) {  
        if (inventario.productos[i].categoria === categoria) {
            inventario.productos[i].precio = inventario.productos[i].precio - (inventario.productos[i].precio * porcentaje / 100);
        }
    }
    console.log('Descuento aplicado en: ', categoria);
})( 'carne', 50);  

//salidas

console.log('Inventario inicial', inventario);

inventario.anadirProducto({ nombre: 'camarón', precio: 6, cantidad: 20, categoria: 'mariscos' });
inventario.listarProductos('ascendente');
inventario.filtrarPorCategoria('carne');

ventas.realizarVenta('pollo', 5);
ventas.realizarVenta('res', 10);
ventas.mostrarVentas();

console.log('Inventario final con descuento', inventario);

ventas.generarReporte();






