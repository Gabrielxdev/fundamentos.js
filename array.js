const notas = [7, 9, 6, 9.5];

let media = (notas[0] + notas[1] +  notas[2] + notas[3]) / notas.length;

console.log(media);



// Adicionando Elementos 

const nota = [8, 7.5, 7];
nota.push(9.8);

console.log(nota);

let medias = (nota[0] + nota[1] + nota[2] + nota[3]) / nota.length;

console.log(medias)


// Deletendo elementos

const notaDenovo = [10, 7, 8, 5, 10];
notaDenovo.pop()

console.log(notaDenovo);

let mediaDenovo = (notaDenovo[0] + notaDenovo[1] +  notaDenovo[2] +  notaDenovo[3]) / notaDenovo.length;

console.log(`A media é: ${mediaDenovo}`);

