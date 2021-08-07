// type alias é basicamente você passar um apelido para seu tipo onde sue código ficara mais limpo
// por convenção, deve-se criar tipos com a letra maiuscula

// tipo name é string
type Name = string;

const namePerson: Name = 'Cleberton';

console.log(namePerson);

// tipo pessoa é um  tipo objeto
type Person = {
    adress: string,
    number: number
    code?: number
    color?: string
}

// Criando uma const com tipo Person sou obrigado a passar um objeto
const newPerson: Person = {
  adress: 'Rua 105',
  number: 155,
};

console.log(newPerson);

type CorRGB = 'Azul' | 'Preto' | 'Branco';

function setColorPerson(color: CorRGB): Person {
  return { ...newPerson, color };
}

console.log(setColorPerson('Branco'));
