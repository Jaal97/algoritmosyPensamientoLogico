var usuario = {u1:0, u2:0, u3:0, u4:0,};
var fechaIngreso = 0;
var fechaI = 0;
var horaIngreso = 0;
var horaI = 0;

var fechaSalida = 0;
var fechaS = 0;
var horaSalida = 0;
var horaS = 0;

var horaEstadia = 0;

var estado = 0;
var costo = 0;

var casillero = 0;

var valorCasillero = {hora: 2000, dia: 40000};

var ingresa = document.getElementById("ingresar")
ingresa.addEventListener("click", daIngreso);
var escribe1 = document.getElementById("escribe1");
var escribe2 = document.getElementById("escribe2");

var sacaB = document.getElementById("sacaBicicleta");
sacaB.addEventListener("click", sacaBicicletas);

function daIngreso()
{
fechaIngreso = document.getElementById("fecha");
fechaI = fechaIngreso.value;
horaIngreso = document.getElementById("hora");
horaI = parseInt(horaI.value);
if(estado == 0)
{
    fechaIngreso = document.getElementById("fecha");
    fechaI = fechaIngreso.value;
    horaIngreso = document.getElementById("hora");
    horaI = parseInt(horaIngreso.value);
    usuario.u1 = document.getElementById("usuario");
    estado = estado + 1;
    casillero = 1;
escribe1.innerHTML = " Has guardado tu bicicleta " + usuario.u1.value +  " tu numero de casillero es " + casillero + " Fecha " + 
fechaI + " hora " + horaI;


}
else if(estado == 1)
{
    fechaIngreso = document.getElementById("fecha");
    fechaI = fechaIngreso.value;
    horaIngreso = document.getElementById("hora");
    horaI = parseInt(horaIngreso.value);
    usuario.u2 = document.getElementById("usuario");
    estado = estado + 1;
    casillero = 2;

    escribe1.innerHTML = " Has guardado tu bicicleta " + usuario.u2.value +  " tu numero de casillero es " + casillero + " Fecha " + 
    fechaI + " hora " + horaI;
}
else if(estado == 2)
{
    fechaIngreso = document.getElementById("fecha");
    fechaI = fechaIngreso.value;
    horaIngreso = document.getElementById("hora");
    horaI = parseInt(horaIngreso.value);
    usuario.u3 = document.getElementById("usuario");
    estado = estado + 1;
    casillero = 3;

    escribe1.innerHTML = " Has guardado tu bicicleta " + usuario.u3.value +  " tu numero de casillero es " + casillero + " Fecha " + 
    fechaI + " hora " + horaI;
}
else if(estado == 3)
{
    fechaIngreso = document.getElementById("fecha");
    fechaI = fechaIngreso.value;
    horaIngreso = document.getElementById("hora");
    horaI = parseInt(horaIngreso.value);
    usuario.u4 = document.getElementById("usuario");
    estado = estado + 1;
    casillero = 4;

    escribe1.innerHTML = " Has guardado tu bicicleta " + usuario.u4.value +  " tu numero de casillero es " + casillero + " Fecha " + 
    fechaI + " hora " + horaI;
}

}



function sacaBicicletas()
{
    estado = 0;

    if(estado == 0)
    {
     fechaSalida = document.getElementById("fechaSalida");
    fechaS = fechaSalida.value;

    horaSalida = document.getElementById("horaSalida");
    horaS = parseInt(horaSalida.value);

    horaEstadia = horaS - horaI;
    costo = horaEstadia * valorCasillero.hora;   
    estado = estado + 1;
    
    escribe2.innerHTML = " Has recojido tu bicicleta " + usuario.u1.value +  " El numero de casillero  " + casillero + " esta libre " + " fecha"
    + fechaS + " hora " + horaS + " pagas un valor de $" + costo;
    
    
    }
    else if(estado == 1)
    {
        fechaSalida = document.getElementById("fechaSalida");
        fechaS = fechaSalida.value;

        horaSalida = document.getElementById("horaSalida");
        horaS = parseInt(horaSalida.value);

        horaEstadia = horaS - horaI;
        costo = horaEstadia * valorCasillero.hora;
        estado = estado + 1;
        
        escribe2.innerHTML = " Has recojido tu bicicleta " + usuario.u2.value +  " El numero de casillero  " + casillero + " esta libre " + 
        " fecha " + fechaS + " hora " + horaS + " pagas un valor de $" + costo;
        
    }
    else if(estado == 2)
    {
        fechaSalida = document.getElementById("fechaSalida");
        fechaS = fechaSalida.value;

        horaSalida = document.getElementById("horaSalida");
        horaS = parseInt(horaSalida.value);

        horaEstadia = horaS - horaI;
        costo = horaEstadia * valorCasillero.hora;
        estado = estado + 1;
        
    
        escribe2.innerHTML = " Has recojido tu bicicleta " + usuario.u3.value +  " El numero de casillero  " + casillero + " esta libre " + 
        " fecha " + fechaS + " hora " + horaS + " pagas un valor de $" + costo;
    }
    else if(estado == 3)
    {
        fechaSalida = document.getElementById("fechaSalida");
        fechaS = fechaSalida.value;

        horaSalida = document.getElementById("horaSalida");
        horaS = parseInt(horaSalida.value);

        horaEstadia = horaS - horaI;
        costo = horaEstadia * valorCasillero.hora;
        estado = estado + 1;
        
    
        escribe2.innerHTML = " Has recojido tu bicicleta" + usuario.u4.value +  " El numero de casillero  " + casillero + " esta libre " + 
        " fecha " + fechaS + " hora " + horaS + " pagas un valor de $" + costo;
    }
    

}


