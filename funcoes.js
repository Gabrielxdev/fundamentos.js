function imprimeTexto (texto){
    console.log(texto);
}

imprimeTexto('eu');



function soma(numero1, numero2){

   return numero1 + numero2;
}
console.log(soma(5, 2));

function nomeIdade(nome, idade){
    
    return `Meu nome é ${nome} e a minha idade é ${idade}`
}

console.log(nomeIdade("Gabriel", 22));



function multiplica(numero1, numero2){
     return numero1 * numero2;

}
console.log(multiplica(soma(2, 5)));


const somar = function(num1, num2) {return num1 + num2}
console.log(somar(3, 3));


const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (n1, n2) => n1 + n2;


const somaNumeroPequenos = (number1, number2) => {
    if(number1 || number2 >= 10) {
        return 'somente números de 1 a 9'
    }else{
        return number1 + number2;
    }
    
}



