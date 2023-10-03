const apiKeyDb = "1"

var vodkaButton = document.getElementById('button1')
var whiskeyButton = document.getElementById('button2')
var ginButton = document.getElementById('button3')
var tequilaButton = document.getElementById('button4')
var rumButton = document.getElementById('button5')
var brandyButton = document.getElementById('button6')
var vermouthButton = document.getElementById('button7')
var cognacButton = document.getElementById('button8')


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
      })
      .catch(error => {
        console.error('Error:', error);
      });
      var results = response.data
      //renderResults(results)

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
 
function renderResults(results){
    let displayedDrink = document.getElementById(display-drink)


}
