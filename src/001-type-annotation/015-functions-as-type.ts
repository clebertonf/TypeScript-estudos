// Como tipar parametro que recebe uma função

// Criamos o tipo para tipar a função
type MapStringsCallback = (arg: string) => string;

// CallableFunction

// Esta função foi escrita no modo mais raiz possível para exmplificação do conceito
function mapStrings(array: string[], callfn: MapStringsCallback): string[] {
//   const newArray: string[] = [];
  const newArray: Array<string> = [];

  array.forEach((value: string) => {
    newArray.push(callfn(value));
  });

  return newArray;
}

console.log(mapStrings(['a', 'b', 'c'], (item: any) => item.toUpperCase()));
