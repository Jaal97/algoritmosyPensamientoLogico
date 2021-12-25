var clientes = {JuanP: 0, CamiloC: 0, StanP: 0, JulietaS: 0};
var prendasPrecio = {blusa: 20000, camiseta: 35000, pantalones: 40000, sudadera: 42000};
var prendaUnitaria = {blusa: 0, camiseta: 0, pantalones: 0, sudadera: 0 };
var prendaTotalU = {blusa: 0, camiseta: 0, pantalones: 0, sudadera: 0 };
var prendasTotal = 0;
var datos;
var datosCliente;

var cantidad;
var cantidadPrendas;

var tipo;
var tipoPrenda;
var escribe = document.getElementById("escribe");

var agregarPrenda = document.getElementById("agregaP");
agregarPrenda.addEventListener("click", aPrenda)

var finalizar = document.getElementById("terminar");
finalizar.addEventListener("click", fin);

function aPrenda()
{
    datos = document.getElementById("cliente");
    datosCliente = parseInt(datos.value);

    cantidad = document.getElementById("prendas")
    cantidadPrendas = parseInt(cantidad.value);

    tipo = document.getElementById("tipo");
    tipoPrenda = parseInt(tipo.value);
if(datosCliente == 1)
{
    if(tipoPrenda == 1)
    {
        prendaUnitaria.blusa = cantidadPrendas;
        prendaTotalU.blusa = prendaUnitaria.blusa * prendasPrecio.blusa;
    }
    else if(tipoPrenda == 2)
    {
        prendaUnitaria.camiseta = cantidadPrendas;
        prendaTotalU.camiseta = prendaUnitaria.camiseta * prendasPrecio.camiseta;
    }
    else if(tipoPrenda == 3)
    {
        prendaUnitaria.pantalones = cantidadPrendas;
        prendaTotalU.pantalones = prendaUnitaria.pantalones * prendasPrecio.pantalones;
    }
    else if (tipoPrenda == 4)
    {
        prendaUnitaria.sudadera = cantidadPrendas;
        prendaTotalU.sudadera = prendaUnitaria.sudadera * prendasPrecio.sudadera;    
    }
    
}
else if (datosCliente == 2)
{
    if(tipoPrenda == 1)
    {
        prendaUnitaria.blusa = cantidadPrendas;
        prendaTotalU.blusa = prendaUnitaria.blusa * prendasPrecio.blusa;
    }
    else if(tipoPrenda == 2)
    {
        prendaUnitaria.camiseta = cantidadPrendas;
        prendaTotalU.camiseta = prendaUnitaria.camiseta * prendasPrecio.camiseta;
    }
    else if(tipoPrenda == 3)
    {
        prendaUnitaria.pantalones = cantidadPrendas;
        prendaTotalU.pantalones = prendaUnitaria.pantalones * prendasPrecio.pantalones;
    }
    else if (tipoPrenda == 4)
    {
        prendaUnitaria.sudadera = cantidadPrendas;
        prendaTotalU.sudadera = prendaUnitaria.sudadera * prendasPrecio.sudadera;
    }
}
else if(datosCliente == 3)
{
    if(tipoPrenda == 1)
    {
        prendaUnitaria.blusa = cantidadPrendas;
        prendaTotalU.blusa = prendaUnitaria.blusa * prendasPrecio.blusa;
    }
    else if(tipoPrenda == 2)
    {
        prendaUnitaria.camiseta = cantidadPrendas;
        prendaTotalU.camiseta = prendaUnitaria.camiseta * prendasPrecio.camiseta;
    }
    else if(tipoPrenda == 3)
    {
        prendaUnitaria.pantalones = cantidadPrendas;
        prendaTotalU.pantalones = prendaUnitaria.pantalones * prendasPrecio.pantalones;
    }
    else if (tipoPrenda == 4)
    {
        prendaUnitaria.sudadera = cantidadPrendas;
        prendaTotalU.sudadera = prendaUnitaria.sudadera * prendasPrecio.sudadera;
    }
}
else if(datosCliente == 4)
{
    if(tipoPrenda == 1)
    {
        prendaUnitaria.blusa = cantidadPrendas;
        prendaTotalU.blusa = prendaUnitaria.blusa * prendasPrecio.blusa;
    }
    else if(tipoPrenda == 2)
    {
        prendaUnitaria.camiseta = cantidadPrendas;
        prendaTotalU.camiseta = prendaUnitaria.camiseta * prendasPrecio.camiseta;
    }
    else if(tipoPrenda == 3)
    {
        prendaUnitaria.pantalones = cantidadPrendas;
        prendaTotalU.pantalones = prendaUnitaria.pantalones * prendasPrecio.pantalones;
    }
    else if (tipoPrenda == 4)
    {
        prendaUnitaria.sudadera = cantidadPrendas;
        prendaTotalU.sudadera = prendaUnitaria.sudadera * prendasPrecio.sudadera;
    }
}
}

function fin()
{
    if(datosCliente == 1)
    {
    prendasTotal = prendaTotalU.blusa + prendaTotalU.camiseta + prendaTotalU.pantalones + prendaTotalU.sudadera;
    clientes.JuanP = clientes.JuanP + prendasTotal;
    
    escribe.innerHTML = "<strong>" + " Has agregado a la cuenta Del cliente Juan Pijamas" + "</strong>";  
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.blusa  + " Blusas " + " precio unidad " + prendasPrecio.blusa + " precio total " + prendaTotalU.blusa;
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.camiseta  + " Camisetas " + " precio unidad " + prendasPrecio.camiseta + " precio total " + prendaTotalU.camiseta;
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.pantalones  + " Camisetas " + " precio unidad " + prendasPrecio.pantalones + " precio total " + prendaTotalU.pantalones;
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.sudadera  + " Camisetas " + " precio unidad " + prendasPrecio.sudadera + " precio total " + prendaTotalU.sudadera; 
    escribe.innerHTML += "</br>" + "</br>" + " El valor total agregado fue de: $ " + prendasTotal + " la cuenta del cliente queda con una deuda de $ " + clientes.JuanP;

    }
    else if(datosCliente == 2)
    {
    prendasTotal = prendaTotalU.blusa + prendaTotalU.camiseta + prendaTotalU.pantalones + prendaTotalU.sudadera;
    clientes.CamiloC = clientes.JuanP + prendasTotal;
    
    escribe.innerHTML = "<strong>" + " Has agregado a la cuenta Del cliente Camilo Chinchilla" + "</strong>";
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.blusa  + " Blusas " + " precio unidad " + prendasPrecio.blusa + " precio total " + prendaTotalU.blusa;
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.camiseta  + " Camisetas " + " precio unidad " + prendasPrecio.camiseta + " precio total " + prendaTotalU.camiseta; 
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.pantalones  + " Camisetas " + " precio unidad " + prendasPrecio.pantalones + " precio total " + prendaTotalU.pantalones;
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.sudadera  + " Camisetas " + " precio unidad " + prendasPrecio.sudadera + " precio total " + prendaTotalU.sudadera;  
    escribe.innerHTML += "</br>" + "</br>" + " El valor total agregado fue de: $ " + prendasTotal + " la cuenta del cliente queda con una deuda de $ " + clientes.CamiloC;
    }
    if(datosCliente == 3)
    {
    prendasTotal = prendaTotalU.blusa + prendaTotalU.camiseta + prendaTotalU.pantalones + prendaTotalU.sudadera;
    clientes.StanP = clientes.JuanP + prendasTotal;
    
    escribe.innerHTML = "<strong>" + " Has agregado a la cuenta Del cliente Stan Pymes" + "</strong>";
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.blusa  + " Blusas " + " precio unidad " + prendasPrecio.blusa + " precio total " + prendaTotalU.blusa; 
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.camiseta  + " Camisetas " + " precio unidad " + prendasPrecio.camiseta + " precio total " + prendaTotalU.camiseta;
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.pantalones  + " Camisetas " + " precio unidad " + prendasPrecio.pantalones + " precio total " + prendaTotalU.pantalones;
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.sudadera  + " Camisetas " + " precio unidad " + prendasPrecio.sudadera + " precio total " + prendaTotalU.sudadera;
    escribe.innerHTML += "</br>" + "</br>" + " El valor total agregado fue de: $ " + prendasTotal + " la cuenta del cliente queda con una deuda de $ " + clientes.StanP;
    }
    if(datosCliente == 4)
    {
    prendasTotal = prendaTotalU.blusa + prendaTotalU.camiseta + prendaTotalU.pantalones + prendaTotalU.sudadera;
    clientes.JulietaS = clientes.JuanP + prendasTotal;
    escribe.innerHTML = "<strong>" + " Has agregado a la cuenta Del cliente Julieta Scart" + "</strong>";
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.blusa  + " Blusas " + " precio unidad " + prendasPrecio.blusa + " precio total " + prendaTotalU.blusa;
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.camiseta  + " Camisetas " + " precio unidad " + prendasPrecio.camiseta + " precio total " + prendaTotalU.camiseta;
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.pantalones  + " Camisetas " + " precio unidad " + prendasPrecio.pantalones + " precio total " + prendaTotalU.pantalones;
    escribe.innerHTML += "</br>" + "</br>" + prendaUnitaria.sudadera  + " Camisetas " + " precio unidad " + prendasPrecio.sudadera + " precio total " + prendaTotalU.sudadera; 
    escribe.innerHTML += "</br>" + "</br>" + " El valor total agregado fue de: $ " + prendasTotal + " la cuenta del cliente queda con una deuda de $ " + clientes.JulietaS;
    }
}
