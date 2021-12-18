let cedula =[200, 100, 50, 20, 10, 5, 2, 1];
let quantidadeNota = cedula.length;
let valor = 537;

       


for(i= 0; quantidadeNota < 8; i++){

 valor = valor - (quantidadeNota * cedula);


      quantidadeNota = (valor / cedula);
       
        
}



console.log(cedula, quantidadeNota)
