const alimentos = [
    {nombre: "treskg", precio: 1200},
    {nombre: "diezkg", precio: 2700},
    {nombre: "veintekg", precio: 5000},
];

let carrito = []

let seleccion = prompt("Hola desea comprar algún alimento para perros si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("Desea realizar una compra")
}

if(seleccion =="si"){
    alert("A continuación le mostramos nuestros Alimentos para perros")
    let todosLosAlimentos = alimentos.map(
        (alimento) => alimento.nombre + " " + "$" + alimento.precio
    );
    alert(todosLosAlimentos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por visitar nuestro sitio, hasta pronto!!")
}

while(seleccion != "no"){
    let alimento = prompt("Agregá un alimento a tu carrito")
    let precio = 0

    if(alimento == "treskg" || alimento == "diezkg" || alimento == "veintekg"){
        switch (alimento) {
            case "treskg":
                precio = 1200;
                break;
            case "diezkg":
                precio = 2700;
                break;
            case "veintekg":
                precio = 5000;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("¿Cúantas bolsas de alimentos quiere comprar?"))

    carrito.push({alimento, unidades, precio})
    console.log(carrito)
    } else {
        alert("Lo sentimos, no tenemos ese producto")
    }

    seleccion = prompt("Desea seguir comprando??")

    while(seleccion === "no"){
        alert("Gracias por la compra! hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`alimento: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por tu compra ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)