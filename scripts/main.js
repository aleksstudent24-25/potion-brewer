const cauldron = [
  {
    Ingredient: "Herbs",
    Count: 0,
  },
  {
    Ingredient: "Berries",
    Count: 0,
  },
  {
    Ingredient: "Mushrooms",
    Count: 0,
  },
  {
    Ingredient: "Water",
    Count: 0,
  },
  {
    Ingredient: "Flowers",
    Count: 0,
  },
];

function addIngredient(ingredient) {
  console.log(`Added 1 ${ingredient} to the cauldron.`);
  let i = cauldron.findIndex((x) => x.Ingredient.toLowerCase() === ingredient);
  cauldron[i].Count++;
}

function checkPotion() {
  console.log("Cauldron contains:");
  cauldron.map((x) => {
    console.log(`${x.Ingredient}: ${x.Count}`);
  });

  if (brewPotion())
    console.log("Congratulations! You've brewed a perfect healing potion!");
}

function brewPotion() {
  const healing = [2, 1, 1, 0, 0];
  for (let i = 0; i < healing.length; i++) {
    if (cauldron[i].Count != healing[i]) return false;
  }
  return true;
}
window.addEventListener("keydown", (e) => {
  if (e.key == "F12") {
    checkPotion();
  }
});
