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
    readonly chaveA: string; // readonly somente leitura
    chaveB: number;
    chaveC?: string;
    [key: string]: unknown; // para adicionar mais chaves em tempo de execução crie um index
                            // (cria um objeto totalmente aberto)
} = {
  chaveA: 'Valor1',
  chaveB: 3,
};

ObjectB.chaveC = 'Carvalho';

ObjectB.chaveF = 'aaaa'; // chave nva criada
console.log(ObjectB);
//  Ha duas opçoes na criação de objetos, a primeira é fazer
//  um objeto com o design mais bem feito, já tipado desde
//  o inicio. Ou fazer um objeto mais aberto para modificações
//  colocando chaves opcionais.
