// null e undefinded representam apenas um valor
// tipo undefined e utiliado pela linguagem, não utilizamos como tipo

// função com parametro opcional e declarada com type anotation

function returnInfos(firstName: string, lastName?: string):
 {
     // type anotation
     firstName: string,
     lastName?: string
} {
  return {
    firstName,
    lastName, // lastName pode assumir uma string ou undefined
  };
}

console.log(returnInfos('Cleberton', 'Carvalho'));

// type null pode ser utilizado em retorno das funções.
