const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '09396354961',
    email: 'leucides@gmail.com',
    fones: ['5591235498', '5521988743124']

}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'filha',
    dataNasc: '20/03/2011'
}

cliente.dependentes.nome = 'Sara Silva';

console.log(cliente)