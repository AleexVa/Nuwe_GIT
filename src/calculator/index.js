function calculator(str) {
  let sum = 0;
  let temp = "0";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (!isNaN(String(ch) * 1)) temp += ch;
    else {
      sum += parseInt(temp);
      temp = "0";
    }
  }
  return sum + parseInt(temp);
}

console.log(calculator("2+20+34"));

  