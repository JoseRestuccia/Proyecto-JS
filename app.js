//* Calculadora de IVA *//
const iva = 1.21

let precioProducto = 0

let respuesta = 0

function CalcularIva(precioProducto = 0) {
    return precioProducto * iva 
}

let numero1
do {
    numero1 = parseFloat (prompt("Ingrese el importe del producto que desea calcular el IVA"))

    if (isNaN (numero1)){
        alert("Por favor ingresar numeros validos")
    }
} while (isNaN (numero1))

let resultado = CalcularIva (numero1, iva)
alert("Su resultado es " + resultado)

console.log(resultado)