// unknown é a mesma coisa do tipo any, so que mais seguro
// ele força a checagem de tipo antes de fazer qualquer operação
// caso contrario ele não realiza a operação

const number1: number = 10;
const number2: unknown = '';
const number3: number = 20;

if (typeof (number2) === 'number') console.log(number1 + number3);
