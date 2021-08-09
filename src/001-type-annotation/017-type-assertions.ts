// Pode ser HTMLBodyElement ou nullo
// Por isso precisa de uma verificação if

const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertion (!)
// Especifico que não pode ser nullo

const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion
// Especifico ao typeScript que o tipo deve ser HTMLBodyElement e não pode ser nullo
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';
