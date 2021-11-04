const numbers = [
  23, 56, 89, 74, 85, 12, 45, 6, 9, 85, 123, 50, 12, 666, 2123, 2021, 2020,
  1023, 999, 47, 199, 33, 236,
];
console.log("Even numbers in the array:");

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}
