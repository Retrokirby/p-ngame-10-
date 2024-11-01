function Calcular() {

    let nombre = document.getElementById('name1').value;
    let Apellido = document.getElementById('Apellido').value;
    let Edad = document.getElementById('edad1').value;
    let Telefono = document.getElementById('telefono').value;
    let Salario = document.getElementById('salario').value;
    let tipodeApartamento = document.getElementById('apartamento').value;
    
    let preciosAPARTAMENTOS = {
        Vistana: 150000,
        Loft: 125000,
        Mirador: 100000
    };

    let Descuento = {
        Vistana: 0.25,
        Loft: 0.15,
        Mirador: 0.10
    };

    let PrecioInicial = preciosAPARTAMENTOS[tipodeApartamento];
    let descuento = PrecioInicial * Descuento[tipodeApartamento];
    let costoFinal = PrecioInicial - descuento;


Descuento;


    document.querySelector(".form-container").style.display = "none";


    document.write("<h3>Resumen de Compra</h3>");
    document.write("<p>Nombre y apellido: " + nombre + " " + apellido + "</p>");
    document.write("<p>Edad: " + edad + "</p>");
    document.write("<p>Teléfono: " + telefono + "</p>");
    document.write("<p>salario: " + salario+ "</p>");
    document.write("<p>Apartamento: " + apartamento + "</p>");
    document.write("<p>Costo Inicial: $" + costoInicial.toFixed(2) + "</p>");
    document.write("<p>Descuento: $" + montoDescuento.toFixed(2) + " (" + (descuento * 100) + "%)</p>");
    document.write("<p>Total a Pagar: $" + pagoFinal.toFixed(2) + "</p>");

    return false; 
}
