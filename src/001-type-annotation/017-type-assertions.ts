/** Recomendado */

// Pode ser HTMLBodyElement ou nullo
// Por isso precisa de uma verificação if
// Utilize em casos que você não tem certeza que o elemento existe

const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion
// Especifico ao typeScript que o tipo deve ser HTMLBodyElement e não pode ser nullo
// Utilize so em casos que voce tenha certeza que o elemento existe

const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLInputElement
const input = document.getElementById('input-name') as HTMLInputElement;
input.value = 'Seu nome';

/** Não recomendado */

// Non-null assertion (!)
// Especifico que não pode ser nullo
// Utilize so em casos que voce tenha certeza que o elemento existe

const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Cuidado não e possivel colocar qualquer tipo, mas somente tipos pré definidos
// isso pode até ser feito, mas e bem improvavel que precise
// exemplo abaixo

let input2 = (document.getElementById('input-idade') as unknown | any) as number;
input2 = 18;

console.log(input2);
