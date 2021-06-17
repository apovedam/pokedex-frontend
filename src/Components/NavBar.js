import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar(props) {
  const classes = useStyles();
  const history = useHistory();

  let backButton;
  if (!props.isHome) {
    backButton = (
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={() => history.push("/")}
      >
        <ArrowBackIcon />
      </IconButton>
    );
  }

  let dexButton;
  if (props.isHome) {
    dexButton = (
      <Button onClick={() => history.push("/Dex")} color="inherit">
        My Pokedex
      </Button>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {backButton}
          <Typography variant="h6" className={classes.title}>
            Ubiqua-Pokedex - {props.title}
          </Typography>
          {dexButton}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
