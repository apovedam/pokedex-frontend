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
  useEffect(() => {
    fetch("https://ubiqua-pokedex-backend.herokuapp.com/poke")
      .then((res) => res.json())
      .then((res) => setPokes(res));
  }, []);

  function removeDexPoke(id) {
    const newDexPokes = dexPokes.filter((item) => item.id !== id);
    setDexPokes(newDexPokes);
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
              <Detail />
            </Route>
            <Route path="/dex">
              <Dex dexPokes={dexPokes} removeDexPoke={removeDexPoke} />
            </Route>
            <Route path="/">
              <Home pokes={pokes} />
            </Route>
          </Switch>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
