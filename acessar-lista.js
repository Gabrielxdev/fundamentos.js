const cliente = {
    nome:'Andre',
    idade: 36, 
    cpf: '09396354961',
    email: 'leucides123@email.com'

}

const chaves = ['nome', 'idade', 'cpf', 'email'];

console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))