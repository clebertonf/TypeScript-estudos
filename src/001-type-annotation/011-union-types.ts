// recurso onde pode ser passado um ou mais tipos para uma variavel, função etc.

const yourAdress: string | number = 10; // pode receber uma string ou numero

console.log(yourAdress);

// retono da função pode ser bollean ou unknow
function verifyNumber(adress?: number): boolean | unknown {
  if (adress === 10) return true;
  return false;
}

console.info(verifyNumber(10));
