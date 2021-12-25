var productos={casuelaDeMariscos: 0, bandejaPaisa: 0, arrozMixto: 0, polloBBQ: 0 };
var bebidas={gaseosaGrande: 0, gaseosaPersonal: 0, aguaPequeña: 0, aguaGrande: 0, te: 0 };

var nombreCliente;
var numeroMesa;
var fechaHora;

var plato;
var comida = 0;

var cantidadPlato;
var cantidadP;

var tomaBebida;
var bebida = 0;

var cantidadBebida;
var cantidadB = 0;

var tomaP = document.getElementById("tomaPedido");
tomaP.addEventListener("click", tomarPedido);

var escribe = document.getElementById("escribe");

var estado = {a : 0, b: 0, c: 0, d: 0};
var estatus = {a: 0, b: 0, c: 0, d: 0, e: 0};

function tomarPedido()
{
    nombreCliente = document.getElementById("nCliente");
    numeroMesa = document.getElementById("mesa")
    fechaHora = document.getElementById("fecha")

    plato = document.getElementById("plato");
    comida = parseInt(plato.value);

    cantidadPlato = document.getElementById("cantidadPlato");
    cantidadP = parseInt(cantidadPlato.value);

    tomaBebida = document.getElementById("bebida");
    bebida = parseInt(tomaBebida.value);

    cantidadBebida = document.getElementById("cantidadBebida");
    cantidadB = parseInt(cantidadBebida.value);

    escribe.innerHTML = "<strong>" + " Tu pedido es: " + "</strong>" + "</br>" + "</br>";
    escribe.innerHTML += "</br" + "</br>" + " Nombre de cliente: " + nombreCliente.value + "</br>" + "</br>" + " Numero de mesa: " + numeroMesa.value + "</br>" + "</br>" ;
    escribe.innerHTML += "</br" + "</br>" + " Fecha: " + fechaHora.value ;
    
    
    if(comida == 1)
    {
        productos.casuelaDeMariscos = cantidadP;
        escribe.innerHTML += "</br>" + "</br>" + productos.casuelaDeMariscos + " " + " Casuela de Mariscos ";
        
    }
    else if (comida == 2)
    {
        productos.bandejaPaisa = cantidadP;
        escribe.innerHTML += "</br>" + "</br>" + productos.bandejaPaisa + " " + " Bandeja Paisa ";
        
    }
    else if (comida == 3)
    {
        productos.arrozMixto = cantidadP;
        escribe.innerHTML += "</br>" + "</br>" + productos.arrozMixto + " " + " Arroz Mixto ";
        
    }
    else if (comida == 4)
    {
        productos.polloBBQ = cantidadP;
        escribe.innerHTML += "</br>" + "</br>" + productos.polloBBQ + " " + " Pollo BBQ ";
        
    }

    if(bebida == 1)
    {
        bebidas.gaseosaGrande = cantidadB
        escribe.innerHTML += "</br>" + "</br>" + bebidas.gaseosaGrande + " " + " Gaseosa Grande ";
       
    }
    else if(bebida == 2)
    {
        bebidas.gaseosaPersonal = cantidadB
        escribe.innerHTML += "</br>" + "</br>" + bebidas.gaseosaPersonal + " " + " Gaseosa Personal ";
        
    }
    else if(bebida == 3)
    {
        bebidas.aguaGrande = cantidadB
        escribe.innerHTML += "</br>" + "</br>" + bebidas.aguaGrande + " " + " Agua Grande ";
        
    }
    else if(bebida == 4)
    {
        bebidas.aguaPequeña = cantidadB
        escribe.innerHTML += "</br>" + "</br>" + bebidas.aguaPequeña + " " + " Agua Pequeña ";
        
    }
    else if(bebida == 5)
    {
        bebidas.te = cantidadB
        escribe.innerHTML += "</br>" + "</br>" + bebidas.te + " " + " Te ";
        
    }
}

