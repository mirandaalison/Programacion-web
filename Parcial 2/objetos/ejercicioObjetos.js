let inventario = {
    prod1: { nombre: 'res', precio: 2, cantidad: 12 },
    prod2: { nombre: 'pollo', precio: 3, cantidad: 13 },
    prod3: { nombre: 'cerdo', precio: 4, cantidad: 14 },
    prod4: { nombre: 'pescado', precio: 5, cantidad: 15 },
};

Object.seal(inventario);

function venderProducto(nombreProducto, cantidadVender) {
    let productoEncontrado = false;

    for (let clave in inventario) {
        const producto = inventario[clave];

        if (producto.nombre === nombreProducto) {
            productoEncontrado = true;

            if (producto.cantidad >= cantidadVender) {
                producto.cantidad -= cantidadVender;
                console.log('Venta exitosa');
            } else {
                console.log('No hay stock suficiente');
            }
        }
    }

    if (!productoEncontrado) {
        console.log('No existe el producto ingresado');
    }
}

function aplicarDescuento(porcentaje) {
    for (let clave in inventario) {
        const producto = inventario[clave];
        const descuento = producto.precio * (porcentaje / 100);
    }
}

console.log("Inventario inicial:");
console.log(inventario);

console.log("Vendiendo:");
venderProducto('pollo', 5);  
venderProducto('cerdo', 3);  

console.log("Aplicando descuento");
aplicarDescuento(10);

console.log("Inventario final:");
console.log(inventario);

