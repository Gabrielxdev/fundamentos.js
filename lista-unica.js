const cliente = [{
    nome: 'Andre',
    cpf: '123123123',
    dependentes: [{
            nome: 'Sara', 
            parentesco: 'filha',
            dataNasc: '20/03/2011'
        }, 
        {
        nome: 'Samia',
        parentesco: 'filha',
        dataNasc: '04/01/2014'
        }],
     },
    {
    nome: 'Juliana',
    cpf: '09396354961',
    dependentes: [{
     nome: 'Sophia',
     parentesco: 'filha',
     dataNasc: '30/08/2020'
    }],
  }
]

const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes]
console.table(listaDependentes) 


    
