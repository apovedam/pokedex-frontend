import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

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

const Home = (props) => {
  //Class styling
  const classes = useStyles();
  //Routing history
  const history = useHistory();

  //Load pokemon to detail state and push to navigation
  const handleOnClick = (id) => {
    props.loadDetail(id);
    history.push("/Detail");
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.pokes.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
              className={classes.card}
              onClick={() => handleOnClick(card.id)}
            >
              <CardMedia
                variant="contained"
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Home.defaultProps = {
  pokes: [],
};

export default Home;
