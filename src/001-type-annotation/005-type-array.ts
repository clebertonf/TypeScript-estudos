// Primeira forma atraves de generics
const array1: Array<string> = ['Cleber'];

console.log(array1);

function multiplyValues(...args: Array<number>): number {
  return args.reduce((acc, mult) => acc * mult, 1);
}

function concatStrings(...args: string[]): string {
  return args.reduce(((acc, string) => `${acc} ${string}`));
}

console.log(multiplyValues(1, 5, 2, 3));
console.log(concatStrings('Ola', 'Mundo!'));

const array2: readonly string[] = ['Seja', 'Bem', 'Vindo'];
const array3: Array<number> = [1, 5, 9];

console.log(array2);
console.log(array3);
