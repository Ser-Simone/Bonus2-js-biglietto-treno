const selezione = prompt ("Scegli Pari o dispari") ;
const numero = prompt("Scegli un numero compreso tra 1 e 9")
let numeroPC = Math.floor(Math.random() * 10);
let somma = 0;
let pippo = 0;

console.info(numeroPC);


somma = numero+numeroPC;
alert("la somma è" + somma);
pippo= somma%2;

switch (selezione)
{
    case "pari":
    if ( pippo == 0)
     
    {
        alert("Hai vinto");
    }
    else { alert("Hai perso") }

    case "dispari" :
    if (pippo==1)
    {
        alert("Hai vinto");
    } 
    else { alert("Hai perso") }
}