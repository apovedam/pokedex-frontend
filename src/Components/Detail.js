import React from "react";
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
import { makeStyles } from "@material-ui/core/styles";

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
    color: "#FFFFFF",
    height: 0,
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Detail = (props) => {
  //Class styling
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={0} sm={3} md={3}></Grid>
        <Grid item key={props.detailPoke} xs={12} sm={6} md={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={props.detailPoke.sprites.front_default}
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {props.detailPoke.name}
              </Typography>
              <Typography variant="h6" component="h2">
                #{props.detailPoke.id}
              </Typography>
              {props.detailPoke.types.map((type) => (
                <Typography gutterBottom variant="h6" component="h2">
                  - {type.type.name}
                </Typography>
              ))}
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                color="primary"
                disabled={props.isDexFull}
                onClick={() => props.addDexPoke(props.detailPoke.id)}
              >
                Add to Pokedex
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

Detail.defaultProps = {
  detailPoke: { sprites: [{}], types: [{}] },
  isDexFull: false,
};

export default Detail;
