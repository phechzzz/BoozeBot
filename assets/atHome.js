var ingredients = [];
const ingredientsQuery = ingredients.join("|");
var apiKeyNinja = 'sadkvCxD+O9QsMM0qn+klw==UuKcm3V674QaCQWo';
var APINinjaurl = "";
var container = document.getElementById("card");

// Get references to all the ingredient buttons.
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

// Add click event listeners to each ingredient button to trigger the 'getIngredients' function.
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

// Function to get ingredients when an ingredient button is clicked.
function getIngredients(event) {
    // Log the ID of the clicked button.
    console.log(event.target.getAttribute("id"));
    
    // Check if the ingredient is not already in the array and add it if not.
    if (!ingredients.includes(event.target.getAttribute("id"))) {
        ingredients.push(event.target.getAttribute("id"));
    }
    // Log the current list of selected ingredients.
    console.log(ingredients);
    // Construct the API URL based on the selected ingredients.
    creatURL();

    // Remove any existing content from the 'container' element.
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Function to create the API URL based on selected ingredients.
function creatURL() {
    // Reset the API URL.
    APINinjaurl = "https://api.api-ninjas.com/v1/cocktail?ingredients=";

    // Loop through the selected ingredients and add them to the URL.
    for (let i = 0; i < ingredients.length; i++) {
        APINinjaurl += ingredients[i];

        // If it's not the last ingredient, add a comma to separate them.
        if (i < ingredients.length - 1) {
            APINinjaurl += ",";
        }
    }

    // Log the constructed URL.
    console.log(APINinjaurl);
}

// Function to make an API request using fetch.
function search() {
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
        // Log the API response.
        console.log(result);

        // You can render the API response on the page here.
    })
    .catch(function(error) {
        // Handle any errors that occur during the fetch.
        console.error('Error: ', error);
    });
}

// Add a click event listener to the 'searchButton' to trigger the 'search' function.
searchButton.addEventListener("click", search);
