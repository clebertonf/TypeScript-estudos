// let tipo number pode receber qualquer valor tipo number

// eslint-disable-next-line prefer-const
let number5: number = 10;

// number 5 e do tipo 100 e não pode receber outro valor alem de 100
// eslint-disable-next-line prefer-const
let number6: 100 = 100;

console.log(number6);

const clientPerson = {
  name: 'Cleberton' as const, // name agora so pode ter o valor
  age: 27,
};

console.log(clientPerson);

// São tipos que a variavel pode receber, e não valores (são tipos literais)
function color(colors: 'Blue' | 'Red' | 'Pink'): string { // parametro da função so pode receber estes tipos
  return colors;
}

console.log(color('Blue'));
