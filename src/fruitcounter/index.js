function noDuplicate() {
  const fruits = [
    "Limón",
    "Albaricoque",
    "Albaricoque",
    "Sandía",
    "Fresa",
    "Melocotón",
    "Pera",
    "Manzana",
    "Plátano",
    "Plátano",
    "Cereza",
    "Piña",
  ];
  const unique = [...new Set(fruits)];

  console.log(unique);
}
noDuplicate();
