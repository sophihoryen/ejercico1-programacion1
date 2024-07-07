class Producto {
    constructor(nombre,costo,gananciaproducto){
        this.nombre = nombre
        this.costo = costo
        this.gananciaproducto = gananciaproducto
    }

    calcularGanancia() {
        return(this.costo*this.gananciaproducto/100).toFixed(2)
    }
    gananciaConSimbolo() {
        return `${this.calcularGanancia()}bs`
    }
}

// upper camel case para los nombres de clases
class Sistema {
    constructor(){
        this.productos = []
        this.totalGnanacia = 0
    }

    // lower camel case para metodos,funciones y variables
    calculadora () {
        const botonCrearProducto = document.getElementById("crear_producto")

        botonCrearProducto.addEventListener("click", (e) => {
            e.preventDefault()


            const nombreProducto = document.getElementById("nombre_producto").value
            const costoProducto = document.getElementById("costo_producto").value
            const porcentajeGanancia = document.getElementById("porcentaje_ganancia").value
            const tablaProductos = document.getElementById("tabla_productos")
            const totalGnanacia = document.getElementById("total_ganancia")

            this.productos.push(new Producto(nombreProducto, costoProducto, porcentajeGanancia) )
            
            let productosTabla = ""

            this.productos.forEach(producto => {
                productosTabla += `
                    <tr>
                        <td>${producto.nombre}</td>
                        <td>${producto.costo}</td>
                        <td>${producto.gananciaproducto}</td>
                        <td>${producto.gananciaConSimbolo()}</td>
                    </tr>
                `
            })
            tablaProductos.innerHTML = productosTabla
            this.totalGnanacia = this.productos.reduce(
                (acumulador,producto) => acumulador + parseFloat(producto.calcularGanancia()),
            0)
            
            totalGnanacia.innerText = `${this.totalGnanacia} bs`
            

        })
    }

}

new Sistema().calculadora()