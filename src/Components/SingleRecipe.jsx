import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import TimeUntil from './TimeUntil';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ul: {
    padding: theme.spacing(2),
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    width: 300,
    color: theme.palette.text.secondary,
  },
  li: {
    marginTop: 8,
  },
  image: {
    display: 'inline',
  },
}));
const SingleRecipe = (props) => {
  const classes = useStyles();
  const history = useHistory();
  if (!props.location.state) history.goBack();
const { healthLabels,
  image,
  ingredients,
  label,
  source,
  url,
  totalTime } = props.location.state.recipe;
  return (
    <section className={classes.root}>
      <h1>{label}</h1>
      <TimeUntil totalTime={totalTime} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <ul className={classes.ul}>
          {ingredients.map((ingredient, index) => (
            <li key={`${image}#${index}`} className={classes.li}>
              (
              {ingredient.text}
              <span>
                (
                {(ingredient.weight).toFixed(2)}
                g
                )
              </span>
            </li>
          ),
          )}
        </ul>
        <img src={image} alt={label} className={classes.image} />
      </Grid>

      <Box mt={5}>
        {healthLabels.map((healthlabel) => (
          <span key={healthlabel}>
            {healthlabel}
            ß,
          </span>
        ))}
      </Box>
      <Box>
        Original Recipe from:
        <a style={{ color: 'black' }} href={url}>{source}</a>
      </Box>
    </section>
  );
};
export default SingleRecipe;
