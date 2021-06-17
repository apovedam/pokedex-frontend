import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";

//component styling
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%",
    backgroundColor: "#e0e0e0",
    height: 0,
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Dex = (props) => {
  //Class styling
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.dexPokes.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={card.sprites.front_default}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                </Typography>
                <Typography>#{card.id}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => props.removeDexPoke(card.id)}
                >
                  Remove from Pokedex
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Dex.defaultProps = {
  dexPokes: [],
};

export default Dex;
