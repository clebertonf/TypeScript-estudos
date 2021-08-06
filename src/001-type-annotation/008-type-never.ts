// Tipo never / void  e utilizado para funções que nuncam retornam nada
// em casos de funções de retornam erros e outras possibilidades

export default function error(): never {
  throw new Error('Aconteceu algo inesperado!');
}

error();

// A função lança um erro, mas não retorna nada
