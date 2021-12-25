var destinatarios=["julwon2212@gmail.com"];
var destino;
var asunto;
var posicion = 0;

var mensaje;

var agregar = document.getElementById("agrega");
agregar.addEventListener("click", agregarDestinatario);

var enviar = document.getElementById("envia");
enviar.addEventListener("click", enviaMensaje);
var escribir = document.getElementById("resultado");

function agregarDestinatario()
{
    posicion = posicion + 1;
    destino = document.getElementById("destinatarios");
    destinatarios[posicion] = destino.value;
    
    
        alert("Has agregado un nuevo destinatario");
    
}

function enviaMensaje()
{
    asunto = document.getElementById("asunto");
    mensaje = document.getElementById("mensaje")
    escribir.innerHTML = "<strong>" + "Agregastes estos destinatarios: " + "</strong>" + "<strong>" + destinatarios + "</strong>" + "</br>" + "</br>" + " Asunto " + "</br>" + "</br>" + " Mensaje " 
    + "</br>" + "</br>" + mensaje.value + "<hr>" + "</hr>";
}