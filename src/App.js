import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar, CssBaseline, Toolbar, Typography } from "@material-ui/core";

import Home from "./Components/Home";
import Dex from "./Components/Dex";
import Detail from "./Components/Detail";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#ba000d",
      dark: "#002884",
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
  const [pokes, setPokes] = useState([]);
  const [dexPokes, setDexPokes] = useState([]);
  const [detailPoke, setDetailPoke] = useState({ sprites: [{}] });
  const [isDexFull, setIsDexFull] = useState(false);

  useEffect(() => {
    fetch("https://ubiqua-pokedex-backend.herokuapp.com/poke")
      .then((res) => res.json())
      .then((res) => setPokes(res));
  }, []);

  function addDexPoke(id) {
    if (!isDexFull) {
      const pokeToAdd = pokes.filter((item) => item.id === id);
      const newDexPokes = [...dexPokes, pokeToAdd];
      setDexPokes(newDexPokes);
      if (dexPokes.length > 5) setIsDexFull(true);
    }
  }

  function removeDexPoke(id) {
    const newDexPokes = dexPokes.filter((item) => item.id !== id);
    setDexPokes(newDexPokes);
    setIsDexFull(false);
  }

  function loadDetail(id) {
    const requestedPoke = pokes.filter((item) => item.id === id);
    if (requestedPoke.length == 1) setDetailPoke(requestedPoke[0]);
    else {
      return setDetailPoke({ sprites: [{}] });
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Pokedex
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <main>
        <Router>
          <Switch>
            <Route path="/detail">
              <Detail detailPoke={detailPoke} addDexPoke={addDexPoke} />
            </Route>
            <Route path="/dex">
              <Dex dexPokes={dexPokes} removeDexPoke={removeDexPoke} />
            </Route>
            <Route path="/">
              <Home pokes={pokes} loadDetail={loadDetail} />
            </Route>
          </Switch>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
