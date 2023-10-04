const apiKeyDb = "1"

var vodkaButton = document.getElementById('button1')
var whiskeyButton = document.getElementById('button2')
var ginButton = document.getElementById('button3')
var tequilaButton = document.getElementById('button4')
var rumButton = document.getElementById('button5')
var brandyButton = document.getElementById('button6')
var vermouthButton = document.getElementById('button7')
var cognacButton = document.getElementById('button8')

function renderResults(cocktails){
  let displayedDrinkContainer = document.getElementById('display-drink')
  
  while (displayedDrinkContainer.firstChild) {
    displayedDrinkContainer.removeChild(displayedDrinkContainer.firstChild);
  }
  for (let i = 0; i < cocktails.length; i++){
    let nameContent = cocktails[i].strDrink
    let ingredient1Content = cocktails[i].strIngredient1
    let ingredient2Content = cocktails[i].strIngredient2
    let ingredient3Content = cocktails[i].strIngredient3
    let ingredient4Content = cocktails[i].strIngredient4
    let ingredient5Content = cocktails[i].strIngredient5
    let ingredient6Content = cocktails[i].strIngredient6
    let ingredient7Content = cocktails[i].strIngredient7

    let nameEl = document.createElement('h2')
    let ingredient1El = document.createElement('li')
    let ingredient2El = document.createElement('li')
    let ingredient3El = document.createElement('li')
    let ingredient4El = document.createElement('li')
    let ingredient5El = document.createElement('li')
    let ingredient6El = document.createElement('li')
    let ingredient7El = document.createElement('li')

    nameEl.textContent = nameContent
    ingredient1El.textContent = ingredient1Content
    ingredient2El.textContent = ingredient2Content
    ingredient3El.textContent = ingredient3Content
    ingredient4El.textContent = ingredient4Content
    ingredient5El.textContent = ingredient5Content
    ingredient6El.textContent = ingredient6Content
    ingredient7El.textContent = ingredient7Content

    displayedDrinkContainer.appendChild(nameEl)
    displayedDrinkContainer.appendChild(ingredient1El)
    displayedDrinkContainer.appendChild(ingredient2El)
    displayedDrinkContainer.appendChild(ingredient3El)
    displayedDrinkContainer.appendChild(ingredient4El)
    displayedDrinkContainer.appendChild(ingredient5El)
    displayedDrinkContainer.appendChild(ingredient6El)
    displayedDrinkContainer.appendChild(ingredient7El)
    
  }


}


function fetchRandomCocktailByAlcohol(alcoholChoice) {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcoholChoice}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Extract an array of cocktails containing the specified alcohol choice
        const cocktails = data.drinks;
  
        if (cocktails && cocktails.length > 0) {
          // Generate a random index to select a cocktail
          const randomIndex = Math.floor(Math.random() * cocktails.length);
  
          // Get the random cocktail ID
          const randomCocktailID = cocktails[randomIndex].idDrink;
  
          // Make a second fetch request to get cocktail details by ID
          const cocktailDetailsUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${randomCocktailID}`;
  
          return fetch(cocktailDetailsUrl);
        } else {
          console.log(`No cocktails found containing ${alcoholChoice}`);
        }
        
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(cocktailData => {
        // Extract the cocktail details, including ingredients
        const cocktail = cocktailData.drinks[0];
        console.log('Random Cocktail:', cocktail);
        
  
        // Extract and display ingredients
        console.log('Ingredients:');
        for (let i = 1; i <= 15; i++) {
          const ingredient = cocktail[`strIngredient${i}`];
          const measure = cocktail[`strMeasure${i}`];
          if (ingredient && measure) {
            console.log(`${measure} ${ingredient}`);
          }
        }
       renderResults(cocktailData.drinks)
      })
      .catch(error => {
        console.error('Error:', error);
      });
      //var results = response.data
      

  }
  
  vodkaButton.addEventListener('click', function(){
    fetchRandomCocktailByAlcohol('vodka')
  })
  whiskeyButton.addEventListener('click', function(){
    fetchRandomCocktailByAlcohol('whiskey')
  })
  ginButton.addEventListener('click', function(){
    fetchRandomCocktailByAlcohol('gin')
  })
  tequilaButton.addEventListener('click', function(){
    fetchRandomCocktailByAlcohol('tequila')
  })
  rumButton.addEventListener('click', function(){
    fetchRandomCocktailByAlcohol('rum')
  })
  brandyButton.addEventListener('click', function(){
    fetchRandomCocktailByAlcohol('brandy')
  })
  vermouthButton.addEventListener('click', function(){
    fetchRandomCocktailByAlcohol('vermouth')
  })
  cognacButton.addEventListener('click', function(){
    fetchRandomCocktailByAlcohol('cognac')
  })
 
