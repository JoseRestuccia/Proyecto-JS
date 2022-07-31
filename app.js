//* Calculadora de IVA *//
const IVA = 1.21

let precioProducto = true

while (precioProducto) {
    precioProducto = parseFloat(prompt("Ingrese el importe del producto que desea ingresar para calcular el IVA"))
    console.log(precioProducto)
    let respuesta = prompt("Desea ingresar mas precios?").toLocaleLowerCase()
    
    if (respuesta == "no"){
        precioProducto = false
    }
    
}

function CalcularIVA(precioProducto = 0) {
    return precioProducto * IVA 
}


let resultado = CalcularIVA
console.log(resultado)


