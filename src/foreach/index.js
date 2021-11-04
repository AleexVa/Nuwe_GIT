let text = "";
const shopping = [
  "Orange",
  "Apple",
  "Peach",
  "Grapes",
  "Pear",
  "Avocado",
  "Tomato",
  "Watermelon",
];
shopping.forEach(myFunction);

function myFunction(item, index) {
  text += index + ": " + item + " ";
}

console.log(text);
