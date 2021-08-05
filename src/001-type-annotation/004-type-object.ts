// tipagem de objetos, todas as tipagens o typeScript faz
// por padrão, o objeto abaixo não aceita valores diferentes
// de string

const ObjectA = {
  chaveA: 'Valor1',
  chaveB: 'Valor2',
};

console.log(ObjectA);

// inserindo os tipos e cahve opcional
const ObjectB: {
    chaveA: string,
    chaveB: number
    chaveC?: string
} = {
  chaveA: 'Valor1',
  chaveB: 3,
};

ObjectB.chaveC = 'Carvalho';

console.log(ObjectB);

//  Ha duas opçoes na criação de objetos, a primeira é fazer
//  um objeto com o desing mais bem feito, já tipado desde
//  o inicio. Ou fazer um objeto mais aberto para modificações
//  colocando chaves opcionais.
