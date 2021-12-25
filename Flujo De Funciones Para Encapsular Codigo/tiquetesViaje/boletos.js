var ciudadOrigen=document.getElementById("origen");
var ciudadDestino=document.getElementById("destino");

var metodoAvion= document.getElementById("Avion");
metodoAvion.addEventListener("click", mAvion);
var metodoAutobus= document.getElementById("Autobus");
metodoAutobus.addEventListener("click", mAutobus );

var ventaTiquete= document.getElementById("vende");
ventaTiquete.addEventListener("click", vendeTic);

var resultado = document.getElementById("resultado");

var puestoAvion;
var pAuto;
var puestoAutobus;
var pAvion;

var maxAvion = 45;
var maxAutobus = 35;

var siAvion = 0;
var siAuto = 0;
var siFAvion = 0;
var siFAuto = 0;
var precioAvion = 0;
var pAvionF = 0;
var pAutobusF = 0;
var estado = 0;

var datosPasajero= document.getElementById("datos");

var hoy = new Date();
var fecha = hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
var hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
var fechayHora = fecha + " " + hora;

var fechaViaje = document.getElementById("fViaje");

function mAvion()
{
puestoAvion = document.getElementById("puestos");
pAvion = parseInt(puestoAvion.value);

siAvion = siAvion + pAvion;
siFAvion = siAvion - pAvion + 1;
maxAvion = maxAvion - pAvion;

precio = 150000;

pAvionF = precio * pAvion;
estado = 1;

}

function mAutobus()
{
    puestoAutobus = document.getElementById("puestos");
    pAuto = parseInt(puestoAutobus.value);
    
    siAuto = siAuto + pAuto;
    siFAuto = siAuto - pAuto + 1;
    maxAutobus = maxAutobus - pAuto;
    precio = 90000;
    
     pAutobusF = precio * pAuto;
    estado = 2;

}

function vendeTic()
{
 
if(estado == 1)
{
    if(maxAvion <= 0)
 {
        alert("Sin cupos para viajar por favor vuelve otro dia");
 }   
 else 
 {
    resultado.innerHTML = "<strong>" + "El Tiquete esta listo "; + "</strong>" + "</br>"
    resultado.innerHTML += "</br>" + "</br>" + "<strong>" + " Fecha de tu viaje " + fechaViaje.value;
    resultado.innerHTML += "</br>" + "</br>" + "<strong>" + " Datos del pasajero: " + "</strong>" + datosPasajero.value;
    resultado.innerHTML += "</br>" +  "</br>" + " Has comprado # " + pAvion + " tickets para viajar en avion ";
    resultado.innerHTML += "</br>" + "</br>" + " Desde el puesto # " + siFAvion + " al " + siAvion;
    resultado.innerHTML += "</br>" + "</br>" + " Ciudad de origen: " + ciudadOrigen.value;
    resultado.innerHTML += "</br>" + "</br>" + " Ciudad de destino: " + ciudadDestino.value;
    resultado.innerHTML += "</br>" + "</br>" + "<strong>" + " Valor Unidad:  $ " + "</strong>" + precio;
    resultado.innerHTML += "</br>" + "</br>" + "<strong>" + " Valor Total: $ " + "</strong>" + pAvionF;
    resultado.innerHTML += "</br>" + "</br>" + hora + " " + fecha;
 }

    
}

else if (estado == 2)
{
    
 if( maxAutobus <=0)
{
    alert("Sin cupos para viajar por favor regresa pronto");
}
else
{
    resultado.innerHTML = "<strong>" + "El Tiquete esta listo "; + "</strong>" + "</br>"
    resultado.innerHTML += "</br>" + "</br>" + "<strong>" + " Fecha de tu viaje " + fechaViaje.value;
    resultado.innerHTML += "</br>" + "</br>" + "<strong>" + " Datos del pasajero: " + "</strong>" + datosPasajero.value;
    resultado.innerHTML += "</br>" +  "</br>" + " Has comprado # " + pAuto + " tickets para viajar en autobus ";
    resultado.innerHTML += "</br>" + "</br>" + " Desde el puesto # " + siFAuto + " al " + siAuto;
    resultado.innerHTML += "</br>" + "</br>" + " Ciudad de origen: " + ciudadOrigen.value;
    resultado.innerHTML += "</br>" + "</br>" + " Ciudad de destino: " + ciudadDestino.value;
    resultado.innerHTML += "</br>" + "</br>" + "<strong>" + " Valor Unidad:  $ " + "</strong>" + precio;
    resultado.innerHTML += "</br>" + "</br>" + "<strong>" + " Valor Total: $ " + "</strong>" + pAutobusF;
    resultado.innerHTML += "</br>" + "</br>" + hora + " / " + fecha;
}
}

}
