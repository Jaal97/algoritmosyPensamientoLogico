let vela = parseInt(prompt("Esta encendida la vela Si lo esta presiona 1, si no lo esta presiona 0"));
let fuego;

if(vela == 1)
{
    alert("vela encendida");
}

else if(vela == 0)
{
    alert("buscar mechera o fosforos para encenderla");
    fuego = parseInt(prompt("ya los conseguiste presiona 1")); 
    if(fuego == 1)
    {
        alert("Vela encendida fin de la ejecucion");
    }
}

let escribe = document.getElementById("escribir");

for(let i = 25; i >= 0; i--)
{
    escribe.innerHTML += " Cuenta regresiva " + i + "</br>" + "</br>";
}



let verificar = document.getElementById("verificarE");
verificar.addEventListener("click", verificacion);

function verificacion()
{
    let edad = document.getElementById("edad");
    let años = parseInt(edad.value);
    if(años >= 18)
    {
        alert("eres mayor de edad acceso concedido");
    }
    else if( años < 18)
    {
        alert("eres un menor de edad regresa ");
    }
}