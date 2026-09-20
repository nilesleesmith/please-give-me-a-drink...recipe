# Please Give Me a Drink... Recipe

A small cocktail-search application built with JavaScript and TheCocktailDB API.

## About

This application lets a user type the name of a cocktail and retrieve information about the matching drink.

The application requests cocktail data from TheCocktailDB and displays the result directly on the webpage.

## Features

- Search for a cocktail by name
- Retrieve cocktail data from an external API
- Display the drink name
- Display a cocktail image
- Display preparation instructions

## How It Works

1. The user enters a cocktail name.
2. The user clicks the search button.
3. JavaScript reads the input.
4. The application builds a TheCocktailDB search URL.
5. `fetch()` sends the request.
6. The response is converted to JSON.
7. The first matching cocktail is selected.
8. The drink name, image, and instructions are displayed in the DOM.

## What I Practiced

- JavaScript
- DOM manipulation
- Event listeners
- User input
- `fetch()`
- Promises
- JSON
- External APIs
- Dynamic page updates

## Technologies

- HTML5
- CSS3
- JavaScript
- TheCocktailDB API

## Running the Project

1. Clone or download the repository.
2. Open `index.html`.
3. Enter a cocktail name.
4. Click the search button.
5. View the returned cocktail information.

An internet connection is required because the application retrieves its information from TheCocktailDB.

## Possible Improvements

- Handle searches with no results
- Display an error message when a request fails
- Show ingredients and measurements
- Support multiple matching drinks
- Allow the Enter key to submit a search
- Improve accessibility and keyboard interaction

## Purpose

This project was created to practice working with external APIs, asynchronous JavaScript, user input, and DOM manipulation.

## Alcohol Disclaimer

This project is a programming exercise created for educational purposes.

It retrieves cocktail information and drink recipes from a public API. The presence of alcoholic drink information in this application is not intended to encourage alcohol consumption.

Please follow the laws and legal drinking-age requirements where you live.

If you choose to drink alcohol:

- Drink responsibly.
- Do not drink and drive.
- Do not operate machinery while impaired.
- Avoid mixing alcohol with medications unless a qualified medical professional has confirmed it is safe.
- Do not provide alcohol to anyone who is under the legal drinking age.
- Consider choosing a non-alcoholic alternative if drinking could put your health or safety at risk.

## Alcohol Help

Alcohol use can become harmful when it begins affecting your health, relationships, finances, work, school, or ability to control how much you drink.

If you are concerned about your drinking or someone else's drinking, support is available.

### United States

**SAMHSA National Helpline**

**Phone:** 1-800-662-HELP (4357)

**TTY:** 1-800-487-4889

### Alcoholics Anonymous

Alcoholics Anonymous provides peer-support meetings for people who want help with alcohol use.

Meetings are available in many areas and may be offered in person or online.

### Practical Safety Steps

- Avoid situations where you are likely to drink.
- Remove alcohol from your immediate environment.
- Ask a trusted person for support.
- Speak with a healthcare professional or counselor.
- Look for local treatment or recovery-support programs.
- Avoid driving or other dangerous activities after drinking.

Stopping heavy or long-term alcohol use suddenly can sometimes cause serious withdrawal symptoms. If you regularly drink large amounts of alcohol or have experienced withdrawal before, consider getting medical guidance before stopping abruptly.

### Emergency Situations

Alcohol poisoning can be life-threatening.

Seek emergency medical help if someone who has been drinking has symptoms such as:

- Difficulty waking up
- Confusion or unconsciousness
- Vomiting repeatedly
- Seizures
- Slow or irregular breathing
- Pale, bluish, or clammy skin

Do not assume someone can simply "sleep it off."

If there is an immediate medical emergency, contact your local emergency service.
