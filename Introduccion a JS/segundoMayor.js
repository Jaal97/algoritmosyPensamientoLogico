function segundoNumeroMayor(numeros)
{
let first = numeros[0];
let second = 0;
    for(let a = 0; a < numeros.length; a++)
    {
        if(numeros[a] > first)
        {
        second = first;
        first = numeros[a];
        }
        if (numeros[a] > second && numeros[a] < first)
        {
        second = numeros[a];
        }
    }
        return second
}

let num = [5, 8, 10, 12, 15, 18];

console.log(segundoNumeroMayor(num));

function segundoNumeroM(nu)
{
console.log(nu);
nu.sort(); //ordena de menor a mayor
console.log(nu);
nu.reverse(); // ordena de mayor a menor
console.log(nu);
return nu[1];

}

let numeros = [9, 5, 3, 12, 18, 28, 32];

console.log(segundoNumeroM(numeros));

function segundoNuMa(n)
{
    n.sort(function (a,b)
    {
        return b - a
    });
    return n[1];
}

let n = [3, 9, 5, 12, 20, 17, 23];

console.log(segundoNuMa(n));