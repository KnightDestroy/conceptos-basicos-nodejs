/**
 Crear la función calcular, para que se pueda ejecutar,
 dando click en el botón calcular, que está en el index.html, todo esto
 se llama el DOM,el cual permite la referencias entre el html, css y js
 */

// Función Tradicional

function calcular_prueba(){
    // Definir la variables para precio y cantidad
    let precio = document.simulador.precio.value;
    let cantidad = document.simulador.cantidad.value;

    // Definir la constante del IVA
    const iva = 0.19;

    // Capturar el producto, este es el select
    producto = document.getElementById('producto').value;

    // Utilizar el condicional if - else, para validar que los campos, si no estan required, no se dejen vacios

    if (precio == 0 || precio == null || cantidad == null || cantidad == 0) {
        // Utilizar un objeto de Ventana llamado Alert
        alert('Digitar los valores en precio y cantidad');

    }

    else{
        //Definir variables para poder realizar los calculos
        let vt = precio*cantidad;

        //Determinar el porcentaje del IVA de acuerdo al valor del Producto
        let vi = vt * iva;

        //Determiar el Valor Total a pagar
        let tp = vt + vi;

        //Mostrar los resultados de las operaciones
        //Mostrar el Producto
        document.getElementById('valor-producto').innerHTML = producto;
        document.getElementById('valor-cantidad').innerHTML = cantidad;
        document.getElementById('valor-precio').innerHTML = precio;
        document.getElementById('valor-total').innerHTML = vt;
        document.getElementById('valor-producto').innerHTML = producto;
        document.getElementById('valor-iva').innerHTML = vi;
        document.getElementById('total-pagar').innerHTML = tp;

    }
}