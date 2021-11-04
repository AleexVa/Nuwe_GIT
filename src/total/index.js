const numbers = [23, 110, 21, 26, 57, 87, 866, 9, 10, 11];
let sumaTotal = 0;

for (let i = 0; i < numbers.length; i++) {
  sumaTotal += numbers[i];
}

console.log(
  "La suma total del array " + "[" + numbers + "]" + " es: " + sumaTotal
);
