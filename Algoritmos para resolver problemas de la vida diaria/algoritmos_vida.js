// Ir al supermercado y luego hacer mercado logicamente.
var transporte= parseInt(prompt("¿En que iras al supermercado 1.En tu carro, 2.En autobus, 3.A pie?"));
var tiempoRuta;
var recursosRuta;
if(transporte == 1)
{
tiempoRuta= 10;
recursosRuta= "Revisar tu auto y ver si tiene combustible";
}
else if(transporte == 2 )
{
    tiempoRuta= 15;
    recursosRuta= 6000;
}
else if(transporte == 3)
{
    tiempoRuta= 40;
    recursosRuta = "No gastaras gasolina ni pasaje pero deberias llevar agua para el camino";
}

if(tiempoRuta == 10)
{
    alert(tiempoRuta + " Minutos hasta el supermercado " + " No olvides " + recursosRuta);
}
else if(tiempoRuta == 15)
{
    alert(tiempoRuta + " Minutos hasta el supermercado " + " $ " + recursosRuta + " de pasaje");
}
else if(tiempoRuta == 40)
{
    alert(tiempoRuta + " Minutos hasta el supermercado " + recursosRuta);
}

// Hacer el mercado
var factura = document.getElementById("factura");
var lista = parseInt(prompt("¿Tienes la lista del mercado que vas a comprar? 1.SI, 2.NO"));
var mercado={};
var precios={harina: 2000, arroz: 2200, huevos: 500, aceite:2500, panela: 3000, sal: 1500 };
var totalu={harina: 0, arroz: 0, huevos: 0, aceite:0, panela:0, sal:0 }
var totalT;
var trabajo={nombre: " ", apellido: " ", direccion: " ",};
var presupuesto = 150000;
var dineroTotal;
//llegar a casa y hacer el arroz
var cocina= 0;
var utensilios={olla: 0};
var arroz={agua: 0, tazas: 0, sal: 0};
var conta= 0;

if(lista == 1)
{
    alert("Que inteligente eres menos mal ahora vamos a hacer el mercado ");
    mercado = {harina: 0, arroz: 0, huevos: 0, aceite:0, panela: 0, sal: 0 };
    mercado.harina= parseInt(prompt("Cuantos kilos de harina"));
    mercado.arroz=parseInt(prompt("Cuantos kilos de arroz"));
    mercado.huevos=parseInt(prompt("Cuantos huevos"));
    mercado.aceite=parseInt(prompt("Cuantos litros de aceite"));
    mercado.panela=parseInt(prompt("Cuantas panelas"));
    mercado.sal=parseInt(prompt("Cuanto de sal "));
    
    totalu.harina = mercado.harina * precios.harina;
    totalu.arroz = mercado.arroz * precios.arroz;
    totalu.huevos = mercado.huevos * precios.huevos;
    totalu.aceite = mercado.aceite * precios.aceite;
    totalu.panela = mercado.panela * precios.panela;
    totalu.sal = mercado.sal * precios.sal;
    
    totalT= totalu.harina + totalu.arroz + totalu.huevos + totalu.aceite + totalu.panela + totalu.sal; 

        factura.innerHTML = "</br>" + "<strong>" + "UND " + " Productos " + " ValorU " + "</strong>" + "</br>"; 
        factura.innerHTML += "</br>" + mercado.harina + "  " + "  " + " Harina " + "  " + totalu.harina + "</br>";
        factura.innerHTML += "</br>" + mercado.arroz + "  " + "  " + " Arroz " + "  " + totalu.arroz + "</br>";
        factura.innerHTML += "</br>" + mercado.huevos + "  " + "  " + " Huevos " + "  " + totalu.huevos + "</br>";
        factura.innerHTML += "</br>" + mercado.aceite + "  " + "  " + " Aceite " + "  " + totalu.aceite + "</br>";
        factura.innerHTML += "</br>" + mercado.panela + "  " + "  " + "Panela " + "  " + totalu.panela + "</br>";
        factura.innerHTML += "</br>" + mercado.sal + "  " + "  " + " Sal " + "  " + totalu.sal  ;
        factura.innerHTML += "</br>" + "</br>" + "<strong>" + "Valor Total" + " $ " + totalT + "</strong>" + "<hr></hr>";
    
    if(totalT > presupuesto)
    {
        
        alert("Gastaste de mas ahora que vas a hacer para pagar estas empeñad@");
        trabajo.nombre=prompt("Te toca trabajar en el supermercado dame tu nombre");
        trabajo.apellido=prompt("Dame tu apellido");
        trabajo.direccion=prompt("Ahora por ultimo tu direccion");
        alert("Estos son tus datos desde ahora trabajaras haciendo aseo " + 
        trabajo.nombre + " " + trabajo.apellido + " Direccion " + trabajo.direccion );
        alert("Que esperas a trabajar");
        alert("Al parecer tu telefono se esta descargando");
        alert("Ahora que vas a hacer para cargarlo");
        cargaC();
        
    }
    else if(totalT <= presupuesto)
    {
        alert("Muy bien paga y regresa a casa con el mercado");
        alert("Has llegado a casa es hora de hacer el almuerzo");
        alert("Tienes que hacer el almuerzo ya se hace tarde, vamos a preparar el arroz");
        utensilios.olla=parseInt(prompt("¿Tienes la olla y la cuchara y lo que necesitas para preparar el arroz listo? 1.SI, 2.NO"));
       if(utensilios.olla == 1)
       {
           cocina=parseInt(prompt("Muy bien Tienes la bombona de gas abierta y la cocina encendida 1.SI, 2.NO"));
           
           if(cocina == 1)
           {
            alert("Vamos ahora a preparar el arroz");
            arroz.agua=parseInt(prompt("¿Cuantas tazas de agua le vas a hechar?"));
            arroz.tazas=parseInt(prompt("¿Cuantas tazas de arroz le hecharas ahora?"));
            arroz.sal=parseInt(prompt("Por ultimo cuantas cucharaditas de sal "));
            if(arroz.sal > 2)
            {
                alert("Eso es mucha sal");
                alert("Tu arroz no quedo tan bueno esta un poco feo que vas a hacer ahora");
                seleccion= parseInt(prompt("Te apetece pedir un domicilio 1.SI, o vas a hacer el arroz de nuevo 2."))
                domicilio();
            }
            else if(arroz.agua > 6)
            {
                alert("Eso es demasiada agua te va a quedar mal");
                alert("Tu arroz no quedo tan bueno esta un poco feo que vas a hacer ahora");
                seleccion= parseInt(prompt("Te apetece pedir un domicilio 1.SI, o vas a hacer el arroz de nuevo 2."))
                domicilio();
            }
            else if(arroz.tazas > 5)
            {
                alert("No te parece que es demasiado arroz");
                alert("Tu arroz no quedo tan bueno esta un poco feo que vas a hacer ahora");
                seleccion= parseInt(prompt("Te apetece pedir un domicilio 1.SI "));
                domicilio();
            }
            
            
            else
            {
                alert("Te quedo muy bien tu arroz te felicito");
                alert("Al parecer tu telefono se esta descargando");
                cargaC();
            }
           }
           else if(cocina == 2)
           {
            cocina=parseInt(prompt("Ya encendiste la bombona de gas y la cocina 1.SI, 2.No"));
           }
       }
       else if (utensilios.olla == 2)
       {
        utensilios.olla=parseInt(prompt("¿Ya los conseguiste espero que si? 1.SI 2.NO"));
        alert("Al parecer no quieres comer e que perezos@")
        seleccion=parseInt(prompt("Entonces que vas a hacer vas a pedir comida a domicilio 1.SI ?"));
        if(seleccion == 1)
        {
            alert("a darle");
            domicilio();
        }
       }
    }
    
}

else if(lista == 2)
{
    alert("Vuelve a casa y ve que hace falta ");

}
else
{
    alert("Que has seleccionado revisa bien esa opcion no es correcta");
}

 //"harina, arroz, huevos, aceite, panela, sal
var seleccion= 0;
var aplicacion= "Comidaya";
var mPago="tarjeta";
var domi=0;


function domicilio()
{
   
domi=parseInt(prompt("Tienes alguna App para pedir a domicilio 1. para Si,  2. NO"));
if(domi == 1)
{
alert("Grandioso pide y paga con tu" + mPago + " Recuerda esperar al menos 20 minutos ");
alert("Ya esta tu domicilio disfruta")
alert("Al parecer tu telefono se esta descargando");
cargaC();
}
else if(domi == 2)
{
alert("Ve a la tienda de aplicaciones y descarga " + aplicacion);
alert("Grandioso pide y paga con tu" + mPago + " Recuerda esperar al menos 20 minutos ");
alert("Ya esta tu domicilio disfruta")
alert("Al parecer tu telefono se esta descargando");
cargaC();
}
else
alert("Al parecer mandaste una opcion incorrecta vamos de nuevo");
domicilio();


}
var carga= 0;

function cargaC()
{
carga=parseInt(prompt("Vas a cargar tu celular ya que le queda muy poca bateria cuanto exactamente de bateria te queda?"));
if(carga < 12)
{
    alert("Vamos a cargarlo ahora ubica un enchufle ");
    alert("Listo tu telefono esta cargando");
    alert(" Has terminado ")

}
else if(carga < 20)
{
alert("Puedes activar el modo de ahorro de energia ");
alert("No se te olvide cargarlo en un rato");
alert("tu telefono murio no lo cargastes");
alert(" FIN ")
}
}