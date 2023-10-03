var ingredients = [];
var apiKeyNinja = 'sadkvCxD+O9QsMM0qn+klw==UuKcm3V674QaCQWo'; 
var APINinjaurl = `https://api.api-ninjas.com/v1/cocktail?${ingredients}`;
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
var sodaButton = document.getElementById("soda");
var juiceButton = document.getElementById("juice");
var bittersButton = document.getElementById("bitters");
var tonicButton = document.getElementById("tonic");


// fetch(APINinjaurl, {
//     method: 'GET',
//     headers: {
//         'X-Api-Key': apiKeyNinja,
//         'Content-Type': 'application/json'
//     }
// })
// .then(function(response) {
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// })
// .then(function(result) {
//     console.log(result);
// })
// .catch(function(error) {
//     console.error('Error: ', error);
// });

// function getIngredients() {
    vodkaButton.addEventListener("click", getIngredients)
    rumButton.addEventListener("click", getIngredients)
    whiskeyButton.addEventListener("click", getIngredients)
    ginButton.addEventListener("click", getIngredients)
    tequilaButton.addEventListener("click", getIngredients)
    brandyButton.addEventListener("click", getIngredients)
    tripplesecButton.addEventListener("click", getIngredients)
    campariButton.addEventListener("click", getIngredients)
    absintheButton.addEventListener("click", getIngredients)
    vermouthButton.addEventListener("click", getIngredients)

    function getIngredients(event){
        // ingredients.push("vodka,");
        
        console.log(event.target.getAttribute("id"))
        if(!ingredients.includes(event.target.getAttribute("id"))){
            ingredients.push(event.target.getAttribute("id"))}
        console.log(ingredients);
        }
// }


//getIngredients()

// function testVodka(){
//     console.log("Hello")
// }
//vodkaButton.addEventListener("click", testVodka)