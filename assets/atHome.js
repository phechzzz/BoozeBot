var ingredients = [];
const ingredientsQuery = ingredients.join("|")
var apiKeyNinja = 'sadkvCxD+O9QsMM0qn+klw==UuKcm3V674QaCQWo'; 
var APINinjaurl = "";
var vodkaButton = document.getElementById("vodka");
var rumButton = document.getElementById("rum");
var whiskeyButton = document.getElementById("whiskey");
var ginButton = document.getElementById("gin");
var tequilaButton = document.getElementById("tequila");
var brandyButton = document.getElementById("brandy");
var tripplesecButton = document.getElementById("trippleSec");
var campariButton = document.getElementById("campari");
var absintheButton = document.getElementById("absinthe");
var vermouthButton = document.getElementById("vermouth");
var searchButton = document.getElementById("search");
var container = document.getElementById("card");

vodkaButton.addEventListener("click", getIngredients);
rumButton.addEventListener("click", getIngredients);
whiskeyButton.addEventListener("click", getIngredients);
ginButton.addEventListener("click", getIngredients);
tequilaButton.addEventListener("click", getIngredients);
brandyButton.addEventListener("click", getIngredients);
tripplesecButton.addEventListener("click", getIngredients);
campariButton.addEventListener("click", getIngredients);
absintheButton.addEventListener("click", getIngredients);
vermouthButton.addEventListener("click", getIngredients);
// Get ingredient functin should get ingredients and create array of those ingredients, then push that array to the url create function
//the urlcreate function should take that array in as an agrument and create the url, for loop to construct url with multiple ingredients
// urlcreate function should push that url into the function to make the API call
// Response from the fetch function should be rendered on the page
    function getIngredients(event){
        
        console.log(event.target.getAttribute("id"))
        if(!ingredients.includes(event.target.getAttribute("id"))){
            ingredients.push(event.target.getAttribute("id"))}
        console.log(ingredients);
        }
        var selectedIngredient = event.target.getAttribute("id")
        APINinjaurl = `https://api.api-ninjas.com/v1/cocktail?ingredients=${event.target.getAttribute("id")}`;
        console.log(APINinjaurl);
        search(APINinjaurl)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
}
console.log(APINinjaurl);
function search(APINinjaurl){
    fetch(APINinjaurl, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKeyNinja,
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.error('Error: ', error);
    });
}

searchButton.addEventListener ("click", search)