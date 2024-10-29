function Calcular() {
   
    let nombre = document.getElementById('name1').value;
    let apellido = document.getElementById('ap').value;
    let edad = document.getElementById('edad1').value;
    let telefono = document.getElementById('tel1').value;


    let depa = document.getElementById('dep').value;
    let Ndepa, precioBase, Interes;

    switch (depa) {
        case "1":
            Ndepa = "Vistana";
            precioBase = 150000;
            Interes = 7.0;
            break;
        case "2":
            Ndepa = "Loft";
            precioBase = 125000;
            Interes = 6.8;
            break;
        case "3":
            Ndepa = "Mirador";
            precioBase = 100000;
            Interes = 6.55;
            break;
        
    }

    
    let Prima = parseFloat(document.querySelector('input[name="p"]:checked').value);
    let montoPrima = calcularPrima(precioBase, Prima);

   
    let plazo = parseInt(document.getElementById('plazo').value);

   
    let costoTotal = calcularCostoTotal(precioBase,Interes, plazo);

   
    let deudaTotal = costoTotal - montoPrima;


    let cuotaMensual = Mensual(deudaTotal, plazo);

    alert(
        `Datos del cliente:\n` +
        `Nombre: ${nombre} ${apellido}\n` +
        `Edad: ${edad}\n` +
        `Teléfono: ${telefono}\n\n` +
        `Detalles de la cotización:\n` +
        `Modelo de apartamento: ${Ndepa}\n` +
        `Plazo para cancelar: ${plazo} años\n` +
        `Costo del apartamento: ${costoTotal} dólares\n` +
        `Monto prima: ${montoPrima} dólares\n` +
        `Deuda total: ${deudaTotal} dólares\n` +
        `Cuota mensual: ${cuotaMensual} dólares`
    );
}

function calcularPrima(precio, porcentaje) {
    return (precio * porcentaje) / 100;
}

function calcularCostoTotal(precioBase, Interes, plazo) {
    let interesTotal = precioBase * (Interes / 100) * plazo;
    return precioBase + interesTotal;
}

function Mensual(deudaTotal, plazo) {
    let meses = plazo * 12;
    return Math.round((deudaTotal / meses) * 100) / 100;
}

function seleccionar(){
    let radio1 = document.getElementById("p1");
    let radio2 = document.getElementById("p2");
    let radio3 = document.getElementById("p3");

    if(radio1.checked){
        alert("Has seleccionado la Opción 1");
    } else if(radio2.checked){
        alert("Has seleccionado la Opción 2");
    } else if(radio3.checked){
        alert("Has seleccionado la Opción 3");
    } else {
        alert("No has seleccionado ninguna opción");
    }
}



