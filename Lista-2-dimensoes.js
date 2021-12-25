const alunos = ['joao', 'juliana', 'Caio'];

const mediaDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];


const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media é' + listaDeNotasEAlunos[1] [indice]
    } else {
        return 'Aluno nao esta cadastrado'
    }
}

console.log(exibeNomeNota('Caio'));
