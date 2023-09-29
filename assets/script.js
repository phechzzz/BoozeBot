let atHomeButton = document.getElementById('at-home')
let atBarButton = document.getElementById('at-bar')

atHomeButton.addEventListener('click', function(){
    window.location.href = 'atHome.HTML'
})

atBarButton.addEventListener('click', function(){
    window.location.href = 'atBar.html'
})

var name = 'bloody mary';
var apiKey = 'sadkvCxD+O9QsMM0qn+klw==UuKcm3V674QaCQWo'; 

var APINinjaurl = 'https://api.api-ninjas.com/v1/cocktail?name=' + encodeURIComponent(name);

fetch(APINinjaurl, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
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
