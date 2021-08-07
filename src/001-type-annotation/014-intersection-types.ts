// insterSection types não é muito utilizado como union

// Fiz tipos separados para exemplificar a união de tipos com insterSection types
type Name6 = { nome: string}
type Age6 = { age: number}

type Person7 = Name6 & Age6;

const ObjectPerson: Person7 = {
  nome: 'Cleberton',
  age: 18,
};

console.log(ObjectPerson);
