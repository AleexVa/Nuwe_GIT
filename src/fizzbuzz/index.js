let number = 100;

if (number != parseInt(number)) {
  console.log(
    "No has introducido un número, refresca página e inténtalo de nuevo."
  );
} else {
  for (let i = 1; i <= number; i++) {
    console.log(i);
    if (i % 3 === 0) {
      console.log("= Fizz ");
    } else if (i % 5 === 0) {
      console.log("= Buzz ");
    } else {
      console.log("= FizzBuzz ");
    }
  }
}
