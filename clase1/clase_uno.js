class Producto {

    constructor(nombre, precio, stock) {

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }


    get_datos() {
        console.log("<--------------------------->");
        console.log("Nombre: ", this.nombre);
        console.log("Precio ", this.precio);
        console.log("Stock ", this.stock);
        console.log("");
    }

    get_stock() {

        if (this.stock <= 0) {
            return false
        }

        else {
            return true
        }
    }

    venta_stock(cantidad) {

        if (this.stock >= cantidad) {

            this.stock = this.stock - cantidad;
        }

        else {
            console.log("No tenemos tanto stock");
        }

    }

}

// INICIO ALTA DE PRODUCTOS //

let lista_productos = [];

for (let i = 0; 1 < 3; i = i + 1) {

    let nombre = prompt("Ingrese el nombre del producto");
    let precio = prompt("Ingrese el precio del producto");
    let stock = prompt("Ingrese el stock del producto");

    let producto = new Producto(nombre, precio, stock);

    lista_productos.push(producto);

}

console.log(lista_productos);

// FIN ALTA DE PRODUCTOS //





// INICIO RENDER DE PRODUCTOS //

for (let producto of lista_productos) {

    producto.get_datos();

}

// FIN RENDER DE PRODUCTOS //





// SIMULO UNA COMPRA //

function buscar_producto(producto) {

    return producto.nombre == compra_usuario
}

let compra_usuario = prompt("Ingrese el nombre del producto que desea comprar");

let resultado_find = lista_productos.find(buscar_producto);

if (resultado_find != undefined) {

    if (resultado_find.get_stock()) {

        let unidades = prompt("¿Cuantas unidades quiere?");
        resultado_find.venta_stock(unidades);
        console.log("Gracias por su compra");
    }

    else {
        console.log("Producto no encontrado")
    }
}

