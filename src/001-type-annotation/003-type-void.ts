// Void é um tipo que não retorna nada
// Em uma função ou metodo

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Cleberton',
  lastName: 'Francisco',

  showInfos(): void {
    console.log(this.name, this.lastName);
  },
};

noReturn('Cleber', 'Francisco');
person.showInfos();

export default { person };
