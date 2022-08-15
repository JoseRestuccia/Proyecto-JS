/* Primera entrega del proyecto */

/*"const producto1 = new Producto("remera", "talle s", 400, "algodon", 10)
const producto2 = new Producto("pantalon", "talle m", 650, "jean", 30)
const producto3 = new Producto("buzo", "talle s", 800, "gabardina", 5)
const producto4 = new Producto("campera", "talle l", 1000, "jean", 0)
const producto5 = new Producto("gorra", "talle unico", 200, "algodon rigido", 50)
const producto6 = new Producto("zapatilla", "talle 42", 2500, "gamuza", 15)
const producto7 = new Producto("musculosa", "talle xl", 300, "nylon", 60)

const ropa = [producto1, producto2, producto3, producto4, producto5, producto6, producto7]

console.log(ropa)

*/

const productosLista = [ 
    {
        id: "1",
        tipo: "remera",
        talle: "talle s",
        precio: 400,
        tela: "algodon",
        },

        {
            id: "2",
            tipo:"pantalon",
            talle:"talle m",
            precio: 650,
            tela: "jean",
            },
        {
        id:"3",
        tipo: "buzo",
        talle: "talle s",
        precio: 800,
        tela:"gabardina",
        },
    
        {
        id:"4",
        tipo: "campera",
        talle: "talle l",
        precio: 700,
        tela:"algodon rigido",
        },

        {
        id: "5",
        tipo: "zapatilla",
        talle: "talle 42",
        precio: 1500,
        tela: "gamuza",
        },
                    
]
class Producto {
    constructor(id, tipo, talle, precio, tela) {
        this.id = id
        this.tipo = tipo
        this.talle = talle
        this.precio = precio
        this.tela = tela
    }
    obtenerInfo(){
        return`ID: ${this.id} | ${this.tipo} $${this.precio} `
    }
    obtenerAviso(){
        return `El producto: ${this.tipo} cuesta $${this.precio}`
    }
}

/*  variables  */

const carrito = [];

/* funciones */
const obtenerInfoProductos = (productosArray) =>{
    return productosArray.map ( (elemento) => elemento.obtenerInfo("$")).join("\n")
}

const agregarAlCarritoPorId = ()  =>  {
    const infoProductos = obtenerInfoProductos(productos);
    const id = prompt("Ingrese el ID del producto que desea comprar:\n" + infoProductos);
    const producto = productos.find((producto) => producto.id ===id);
    carrito.push(producto);
    alert("Agregaste este producto al carrito")
}

const mostrarCarrito = (carritoDeProductos)=> {
    carritoDeProductos.forEach(producto => {
        console.log(producto.obtenerAviso("$"))
    });
}

const obtenerTotal = (productosArray) => {
    let total = 0;
    productosArray.forEach((producto) => {
    total += producto.precio
    })
    return total
}

/* definicio de productos */
const productos = productosLista.map (producto => new Producto(
    producto.id,
    producto.tipo,
    producto.talle,
    producto.precio,
    producto.tela
))

agregarAlCarritoPorId(productos);
agregarAlCarritoPorId(productos);

alert("Compra realizada, abrir la consola para poder ver los productos")
mostrarCarrito(carrito)
console.log ("TOTAL: ", obtenerTotal(carrito))