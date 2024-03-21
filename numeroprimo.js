//FUnção paraerificar se um número é primo
function verificarPrimo(num){
    if(num<= 1) return false;
    if(num <= 3) return true;

    if(num % 2 ===0 || num % 3 === 0 ) returnfalse;

    for(let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num% ( i + 2)=== 0 ) returnfalse;

}

  returntrue;

}

//Exemplos de uso
console.log("5 é primo?"), verificarPrimo(5); 
console.log ("10 é primo?"), verificarPrimo(10);
console.log ("17 é primo?"), verificarPrimo(17);
console.log ("25 é primo?"),verificarPrimo(25);


    




