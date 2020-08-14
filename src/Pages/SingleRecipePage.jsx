import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
// import TimeUntil from '../Components/TimeUntil';

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
    width: 310,
    color: theme.palette.text.secondary,
  },
  li: {
    marginTop: 8,
  },
  image: {
    display: 'inline',
  },
  measurment: {
    fontWeight: '600',
    color: '#e4686a',
  },
  healthLabel: {
    color: '#006C49',
    fontWeight: '600',
    fontSize: '1.5rem',
  },
}));
const SingleRecipePage = () => {
  const classes = useStyles();
  /*
if (!props.location.state) history.goBack();
const { healthLabels,
  image,
  ingredients,
  label,
  source,
  url,
  totalTime } = props.location.state.recipe;
  */
  return (
    <section className={classes.root}>
      {
    /*   <h1>{label}</h1>
      <TimeUntil totalTime={totalTime} /> */
      }
      Im single page but need to get data passed to me somehow.
      {
   /*    <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <ol className={classes.ul}>
            {ingredients.map((ingredient, index) => (
              <li key={`${image}#${index}`} className={classes.li}>
                (
                {ingredient.text}
                <span className={classes.measurment}>
                  &nbsp;&nbsp;
                  (
                  {Math.round(ingredient.weight)}
                  g
                  )
                </span>
              </li>
            ))}
          </ol>
          <img src={image} alt={label} className={classes.image} />
        </Grid> */}

      <Box mt={5}>
        {
   /*      {healthLabels.map((healthlabel) => (
          <span className={classes.healthLabel} key={healthlabel}>
            {healthlabel}
            ,
          </span>
        ))} */
        }
      </Box>
      <Box>
        Original Recipe from:
        {/*  <a style={{ color: 'black' }} href={url}>{source}</a> */}
      </Box>
    </section>
  );
};
export default SingleRecipePage;
