function prime(num) {
  const primes = [];
  const firstPNumber = 2;
  let divisor = firstPNumber;

  while (num > firstPNumber) {
    if (num % divisor == 0) {
      primes.push(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }
  return primes;
}

console.log(prime(105));
