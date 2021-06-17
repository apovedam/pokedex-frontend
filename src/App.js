import "./App.css";
import React, { useEffect, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Dex from "./Components/Dex";
import Detail from "./Components/Detail";
import NavBar from "./Components/NavBar";

//Page color theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#ba000d",
      dark: "#d50000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  //Pokemon list state
  const [pokes, setPokes] = useState([]);
  //Pokedex list state
  const [dexPokes, setDexPokes] = useState([]);
  //State to check if new pokemon can be added
  const [isDexFull, setIsDexFull] = useState(false);
  //Details of the current selected pokemon
  const [detailPoke, setDetailPoke] = useState({ sprites: [{}], types: [] });

  //Fetch data on component load
  useEffect(() => {
    fetch("https://ubiqua-pokedex-backend.herokuapp.com/poke")
      .then((res) => res.json())
      .then((res) => setPokes(res));
  }, []);

  //Add pokemon to dex by ID
  function addDexPoke(id) {
    if (!isDexFull) {
      const pokeToAdd = pokes.filter((item) => item.id === id);
      if (pokeToAdd.length === 1) {
        const newDexPokes = [...dexPokes, pokeToAdd[0]];
        setDexPokes(newDexPokes);
        if (dexPokes.length >= 5) setIsDexFull(true);
      }
    }
  }

  //Remove pokemon from dex by ID
  function removeDexPoke(id) {
    const newDexPokes = dexPokes.filter((item) => item.id !== id);
    setDexPokes(newDexPokes);
    setIsDexFull(false);
  }

  //Load pokemon details to state by ID
  function loadDetail(id) {
    const requestedPoke = pokes.filter((item) => item.id === id);
    if (requestedPoke.length === 1) setDetailPoke(requestedPoke[0]);
    else {
      return setDetailPoke({ sprites: [{}], types: [{}] });
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <main>
          <Router>
            <Switch>
              <Route path="/detail">
                <NavBar title="Detail" isHome={false} />
                <Detail
                  detailPoke={detailPoke}
                  addDexPoke={addDexPoke}
                  isDexFull={isDexFull}
                />
              </Route>
              <Route path="/dex">
                <NavBar title="Dex" isHome={false} />
                <Dex dexPokes={dexPokes} removeDexPoke={removeDexPoke} />
              </Route>
              <Route path="/">
                <NavBar title="Home" isHome={true} />
                <Home pokes={pokes} loadDetail={loadDetail} />
              </Route>
            </Switch>
          </Router>
        </main>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
