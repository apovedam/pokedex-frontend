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
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Detail = (props) => {
  const classes = useStyles();

  const history = useHistory();
  const handleOnClick = (a) => history.push("/Detail/");

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        <Grid item key={props.detailPoke} xs={12} sm={6} md={4}>
          <Card
            className={classes.card}
            // onClick={() => props.addDexPoke(props.detailPoke.id)}
          >
            <CardMedia
              className={classes.cardMedia}
              image={props.detailPoke.sprites.front_default}
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {props.detailPoke.name}
              </Typography>
              <Typography>#{props.detailPoke.id}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
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
  detailPoke: { sprites: [{}] },
};

export default Detail;
