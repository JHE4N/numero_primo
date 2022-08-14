function verificaNumeroPrimo(numero){
    if (numero == 1 || numero ==0){
        console.log(`${numero} não é primo`)
    }
    let divisor = 2;
    while(numero%divisor != 0)
        divisor++;

    if(numero == divisor)
        console.log("Número é Primo!");
    else
        console.log("Número NÃO primo!");
}
