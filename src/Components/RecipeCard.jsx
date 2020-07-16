import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Card,
  CardActionArea, CardMedia, CardContent,
  Typography, CardActions, Button,
} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#ffffffBF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 290,
    height: 450,
    border: '1px solid white',
    cursor: 'pointer',
  },
  img: {
    height: 250,
  },
  media: {
    height: 400,
  },
  cardBtn: {
    alignSelf: 'flex-end',

  },
}));
const RecipeCard = ({ recipe, handleRecipe }) => {
  const [isRaised, setIsRaised] = useState(true);
  const classes = useStyles();
  const handleClick = (uri) => {
    handleRecipe(uri);
  };
  return (
    <Grid item>
      <article className="recipes__section__article">
        <Card
          className={classes.card}
          raised={isRaised}
          onFocus={() => setIsRaised(true)}
          onMouseOver={() => setIsRaised(false)}
          onMouseLeave={() => setIsRaised(true)}
          onClick={() => handleClick(recipe.uri)}>
          <CardActionArea className={classes.media}>
            <CardMedia
              className={classes.img}
              image={recipe.image}
              title={recipe.label}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {recipe.label}
              </Typography>
              {recipe.healthLabels.map(label => (
                <Typography
                  key={label}
                  style={{ display: 'inline' }}
                  variant="subtitle2"
                  color="textSecondary"
                >
                  {label}
                </Typography>
              ))}

            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardBtn}>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </article>
    </Grid>
  );
};

export default RecipeCard;
