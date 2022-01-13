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

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes('dependentes')) {

        console.log(`Oferta de seguro de vida para o  ${obj.nome}`)
    }
}

console.log(Object.values(cliente))

oferecerSeguro(cliente);