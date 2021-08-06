// tupla no typeScript pode ser modificada, é mutavel.

const person2: [number, string] = [1, 'Cleberton'];
const person3: [number, string, string?] = [1, 'Cleberton', 'Carvalho'];
const person4: [number, string, ...number[]] = [1, 'Cleberton', 1, 6];

console.log(person2);
console.log(person3);
console.log(person4);
