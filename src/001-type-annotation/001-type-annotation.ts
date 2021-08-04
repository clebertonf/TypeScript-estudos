/* eslint-disable */

// tipos basicos (aqui ocorre inferência de tipos, é somente para explicação)
// Quando estiver escrevendo código, não escreva o tipo da variavel, so faça isso se acontecer inferência
const yourName: string = 'Cleber';
const age: number = 27;
const adult: boolean = true;
const symbol: symbol = Symbol('my symbol');
// const big: bigint = 10n;

// Arrays

const ArrayNumbers: Array<number> = [1, 2, 3];
const ArrayNames: Array<string> = ['Cleber', 'Lucas'];

const ArrayExemplo: number[] = [1, 2, 3];
const ArrayExemplo2: string[] = ['Cleber', 'Lucas'];

// Objects

const person: { name: string, age: number, adult?: boolean} = {
    name: "Cleberton",
    age: 27
};

console.log(person)

// Functions tipagem

// tipagem parametros e da função (seu retorno)
function sum(x: number, y: number): number {
   return x + y;
}

const result = sum(2, 4);
console.log(result)

const multiply: (x: number, y: number) => number = (x, y) => x * y;

console.log(multiply(10,2));

