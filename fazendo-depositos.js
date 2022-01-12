const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '123123123',
    email: 'andre@gmail.com',
    fones: ['4343434343', '65564654'],
    dependentes: [
        {
            nome: 'Sara Silva', 
            parentesco: 'filha',
            dataNasc: '20/03/2011'
        }, 
    {
        nome: 'Samia Maria',
        parentesco: 'filha',
        dataNasc: '04/01/2014'
    }
    ],  

    saldo: 100, 
    depositar:function(valor){
        this.saldo += valor;
    }
    
}

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);