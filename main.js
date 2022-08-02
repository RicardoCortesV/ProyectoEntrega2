

stock = ["Alegrías, Pan, Dulces"]

for (let i = 0; i < stock.length; i++) {
    alert("Éstos artículos tienen poco stock: " + stock[i]);
}

const carrito = [];

function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito)
}

agregarAlCarrito({name: "alegría", price: 1.00})








