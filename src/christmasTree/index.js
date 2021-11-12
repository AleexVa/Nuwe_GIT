function christmasTree() {
  let n = 5;
  let arbol = "";
  let tronco = "";
  for (let i = 0; i <= n; i++) {
    arbol = "";
    for (let s = i; s < n; s++) {
        arbol += " ";
    }
    for (let a = 0; a < 2 * i - 1; a++) {
        arbol += "*";
    }
    console.log(arbol);
  }
  for (let i = 0; i < 2; i++) {
    tronco = "";
    for (let s = 0; s < 3; s++) {
      tronco += " ";
    }
    for (let a = 0; a < 2; a++) {
      tronco += "*";
    }
    console.log(tronco);
  }
}

christmasTree();
