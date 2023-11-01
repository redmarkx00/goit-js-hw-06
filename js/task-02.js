const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const origList = document.getElementById('ingredients');
for (const ingredient of ingredients) {
  const ingredientElement = document.createElement("li");
  ingredientElement.textContent = ingredient;
  origList.append(ingredientElement);
}