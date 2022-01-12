const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '09396354961',
    email: 'leucides@gmail.com',
    fones: ['5591235498', '5521988743124'],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    }]

}

    cliente.dependentes.push({
        nome: 'Samia Maria',
        parentesco: 'filha',
        dataNasc: '04/01/2014'
    })

//console.log(cliente)
  const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '04/01/2014')

  console.log(filhaMaisNova)
  console.log(filhaMaisNova[0].nome)


