var Pikachu= {Vida: 150, Ataque: 40 };
var Jigglypuff= {Vida: 145, Ataque: 35};
var Alakazam= {Vida: 160, Ataque: 36};

var lucha1 = 0;
var lucha2 = 0;
var lucha3 = 0;
var turnos = 0;

var vp = document.getElementById("pika");
var vj = document.getElementById("jig");
var va = document.getElementById("ala");

var p = document.getElementById("p");
var j = document.getElementById("j");
var a = document.getElementById("a");

p.addEventListener("click", gopika);
j.addEventListener("click", gojig);
a.addEventListener("click", goal);

var combate = document.getElementById("con");
combate.addEventListener("click", lucha);

for(var pokemon in Pikachu)
{
    vp.innerHTML= "Vida " + Pikachu.Vida + "</br>" + " Ataque " + Pikachu.Ataque;
    vj.innerHTML= "Vida " + Jigglypuff.Vida + "</br>" + " Ataque " + Jigglypuff.Ataque;
    va.innerHTML= "Vida " + Alakazam.Vida + "</br>" + " Ataque " + Alakazam.Ataque;
}

function gopika()
{
alert("Has seleccionado a Pikachu");
lucha1= 1;

}

function gojig()
{
    alert("Has seleccionado a Jigglypuff");
    lucha2= 2;
}

function goal()
{
    alert("Has seleccionado a Alakazam");
    lucha3= 3;
}

function lucha()
{
    while(turnos < 5)
    {
        if(lucha1 == 1 && lucha2 == 2)
        {
            if(Pikachu.Vida > 0 && Jigglypuff.Vida > 0)
            {
                Jigglypuff.Vida = Jigglypuff.Vida - Pikachu.Ataque;
                Pikachu.Vida = Pikachu.Vida - Jigglypuff.Ataque;
               
            }
            if(Pikachu.Vida <= 0)
            {
                alert("Jigglypuff Gana" + " la vida de tu oponente es " + Pikachu.Vida);
                turnos = 5
            }
            else if(Jigglypuff.Vida <= 0)
         {
                alert("Pikachu es el Ganador" + " la vida de tu oponente es " + Jigglypuff.Vida);
                turnos = 5
         }
            
        }
        if(lucha1 == 1 && lucha3 == 3)
        {
            if(Pikachu.Vida > 0 && Alakazam.Vida > 0)
            {
                Alakazam.Vida = Alakazam.Vida - Pikachu.Ataque;
                Pikachu.Vida = Pikachu.Vida - Alakazam.Ataque;
            }
            if(Pikachu.Vida <= 0)
            {
                alert("Alakazam es el Ganador" + " la vida de tu oponente es " + Pikachu.Vida);
                turnos = 5
            }
            else if(Alakazam.Vida <= 0)
            {
                alert("Pikachu es el Ganador" + " la vida de tu oponente es " + Alakazam.Vida);
                turnos = 5
            }
        }
        if(lucha2 == 2 && lucha3 == 3)
        {
            if(Jigglypuff.Vida > 0 && Alakazam.Vida > 0)
            {
                Jigglypuff.Vida = Jigglypuff.Vida - Alakazam.Ataque;
                Alakazam.Vida = Alakazam.Vida - Jigglypuff.Ataque;
            }
            if(Jigglypuff.Vida <= 0)
            {
                alert("Alakazam es el Ganador" + " la vida de tu oponente es " + Jigglypuff.Vida);
                turnos = 5
            }
            else if(Alakazam.Vida <= 0)
            {
                alert("Jigglypuff es el Ganador"+ " la vida de tu oponente es " + Alakazam.Vida);
                turnos = 5
            }
        }
        turnos = turnos + 1
        console.log(turnos);
    }
   turnos = 0
}