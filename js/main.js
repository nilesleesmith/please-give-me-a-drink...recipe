//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getCocktail);

function getCocktail() {

    let drinkName = document.querySelector('input').value;

    console.log(drinkName);

    let drinkMenu =
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkName;

    console.log(drinkMenu);

    fetch(drinkMenu)

        .then(function (response) {

            console.log(response);

            return response.json();
        })

        .then(function (data) {

            console.log(data);

            let myDrink = data.drinks[0];

            console.log(myDrink);

            console.log(myDrink.strDrink);
            console.log(myDrink.strDrinkThumb);
            console.log(myDrink.strInstructions);

            document.querySelector('h2').innerText = myDrink.strDrink;
            document.querySelector('img').src = myDrink.strDrinkThumb;
            document.querySelector('h3').innerText = myDrink.strInstructions;

        });
};