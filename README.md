# Digital Pokedex - frontend

This is the front end for the Digital Pokedex web app developed for the Ubiqua Coding Challenge.

The app was developed using the React library and the Material-UI framework.

Back end repository can be found [here](https://github.com/apovedam/pokedex-backend).

## App.js

The main project file that queries the backend via a fetch request to obtain a list of 10 randomly generated pokemon.

This contains useState hooks for both the list of queried pokemon as well as the ones currently in the pokedex.

It also contains the Router and Switch components to properly display the correct child component depending on the current route.

## Routes

### Home (`/`)

Shows the 10 randomly generated pokemon obtained from the backend, each of which can be clicked to go to it's respective detail screen.

### Detail (`/Detail`)

Shows a specific pokemon's detail and type information, along with a button to add it to the pokedex state variable.

### Pokedex (`/Dex`)

Shows up to 6 pokemon added to the pokedex by the user, along with a function to remove any of them from the state.
