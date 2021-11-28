var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies",
  "Stuffing"
];
var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];
var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
];

var favoriteRecipies = [];

var letsCookButton = document.querySelector('.lets-cook-button');
var sideButton = document.querySelector('#side');
var mainDishButton = document.querySelector('#maindish');
var dessertButton = document.querySelector('#dessert');
var entireMealButton = document.querySelector('#entiremeal');
var formView = document.querySelector('#form-view');
var cookPotView = document.querySelector('.cookpot-view');
var resultsView = document.querySelector('.results-view');
var favoritesView = document.querySelector('.favorites-view');
var recipeResult = document.querySelector('.results');
var clearResult = document.querySelector('.clear-button');
var favoriteButton = document.querySelector('.favorite-button');
var viewFavoritesButton = document.querySelector('.view-favorite-button');
var favoriteRecipeList = document.querySelector('.favorites');
var mainPageButton = document.querySelector('.return-to-main');
var addRecipeButton = document.querySelector('.recipe-button');
var addRecipeView = document.querySelector('.add-recipe');
var addNewRecipeButton = document.querySelector('.add-new-recipe-button');
var userRecipeType = document.querySelector('.user-recipe-type');
var userRecipeName = document.querySelector('.user-recipe-name');



let getRandomIndex = array => {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

let chooseRecipe = () => {
  switch(true) {
    case sideButton.checked:
      recipeResult.innerText = getRandomIndex(sides);
      break;
    case mainDishButton.checked:
      recipeResult.innerText = getRandomIndex(mains);
      break;
    case dessertButton.checked:
      recipeResult.innerText = getRandomIndex(desserts);
      break;
    case entireMealButton.checked:
      recipeResult.innerText = `${getRandomIndex(mains)} with a side of ${getRandomIndex(sides)} and ${getRandomIndex(desserts)} for dessert!`;
      break;
  }
}

let showRecipe = () => {
  cookPotView.classList.add('hidden');
  resultsView.classList.remove('hidden');
  chooseRecipe();
}

let clearResultsView = () => {
  cookPotView.classList.remove('hidden');
  resultsView.classList.add('hidden');
}

let returnToMain = () => {
  favoritesView.classList.add('hidden');
  formView.classList.remove('hidden');
  cookPotView.classList.remove('hidden');
}

let addFavoriteRecipe = () => {
  if (favoriteRecipies.includes(recipeResult.innerText)) {
    return favoriteRecipies
  } else {
  favoriteRecipies.push(recipeResult.innerText);
  }
}

let showFavoriteRecipes = () => {
  formView.classList.add('hidden');
  resultsView.classList.add('hidden');
  favoritesView.classList.remove('hidden');
  cookPotView.classList.add('hidden');
  favoriteRecipeList.innerHTML = ``;
  favoriteRecipies.forEach(item => {
    favoriteRecipeList.innerHTML += `
      <div><button id="${item}" style="background-color: #95a5a6; color: white; border: 0; border-radius: 4px;">DELETE</button>${item}</div>`
  })
}

let deleteRecipe = () => {
  favoriteRecipies.forEach(item => {
    if (event.target.id === `${item}`) {
         favoriteRecipies.splice(favoriteRecipies.indexOf(item), 1);
       }
  })
  showFavoriteRecipes();
}

let showAddRecipeForm = () => {
  addRecipeView.classList.remove('hidden');
}

let displayNewRecipe = () => {
  event.preventDefault();
  formView.classList.remove('hidden');
  favoritesView.classList.add('hidden');
  cookPotView.classList.add('hidden');
  resultsView.classList.remove('hidden');
  addRecipeView.classList.add('hidden');
  addNewRecipe();
}

let addNewRecipe = () => {
  switch(true) {
    case userRecipeType.value === "side":
    sides.push(userRecipeName.value);
    recipeResult.innerText = userRecipeName.value;
    break;
    case userRecipeType.value === "main dish":
    mains.push(userRecipeName.value);
    recipeResult.innerText = userRecipeName.value;
    break;
    case userRecipeType.value === "dessert":
    desserts.push(userRecipeName.value);
    recipeResult.innerText = userRecipeName.value;
    break;
    default:
    recipeResult.innerText = `Sorry, ${userRecipeType.value} isn't available.`;
  }
}

letsCookButton.addEventListener("click", showRecipe);
clearResult.addEventListener("click", clearResultsView);
mainPageButton.addEventListener("click", returnToMain);
favoriteButton.addEventListener("click", addFavoriteRecipe);
viewFavoritesButton.addEventListener("click", showFavoriteRecipes);
favoriteRecipeList.addEventListener("click", deleteRecipe);
addRecipeButton.addEventListener("click", showAddRecipeForm);
addNewRecipeButton.addEventListener("click", displayNewRecipe);
