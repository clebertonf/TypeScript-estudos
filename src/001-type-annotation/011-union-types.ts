// recurso onde pode ser passado um ou mais tipos para uma variavel, função etc.

const yourAdress: string | number = 10; // pode recebr uma string ou numero

console.log(yourAdress);

function verifyNumber(adress?: number): boolean {
  if (adress === 10) return true;
  return false;
}

console.info(verifyNumber(10));
