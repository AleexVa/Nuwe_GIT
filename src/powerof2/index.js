const numbers = [12, 22, 45, 323, 546, 34, 76, 99, 10];
const cuadrados = [];

for (let i = 0; i < numbers.length; i++) {
  cuadrados.push(Math.pow(numbers[i], 2));
}

console.log(cuadrados);
