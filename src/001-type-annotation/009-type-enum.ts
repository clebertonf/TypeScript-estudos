// Enums são usados ​​para representar um número fixo de valores possíveis
enum colors {
    blue = 10,
    red,
    green
}

console.log(colors);

function setColor(color: colors): void {
  console.log(colors[color]);
}

setColor(colors.blue);
