function Calcular() {
    let nombre = document.getElementById("name1").value;
    let apellido = document.getElementById("Apellido").value;
    let edad = document.getElementById("edad1").value;
    let telefono = document.getElementById("telefono").value;
    let salario = document.getElementById("salario").value;
    let apartamentoSelect = document.getElementById("apartamento");
    let apartamento = apartamentoSelect.options[apartamentoSelect.selectedIndex].text;
    let costoInicial = parseFloat(apartamentoSelect.value);

   
    let descuento = 0;
    if (costoInicial === 150000) {
        descuento = 0.25; 
    } else if (costoInicial === 125000) {
        descuento = 0.15; 
    } else if (costoInicial === 100000) {
        descuento = 0.10; 
    }
    
    let montoDescuento = costoInicial * descuento;
    let pagoFinal = costoInicial - montoDescuento;


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
