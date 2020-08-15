import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TimeUntil from '../Components/TimeUntil';
import LoadingComponent from '../Components/LoadingComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    flexGrow: 1,
    margin: '1rem',
  },
  title: {
    color: '#e4686a',
  },
  fontResponsive: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  ol: {
    padding: theme.spacing(2),
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary,
  },
  li: {
    marginTop: 8,
  },
  image: {
    width: '35vw',
    [theme.breakpoints.down('sm')]: {
      width: '85vw',
    },
  },
  measurment: {
    fontWeight: '600',
    color: '#e4686a',
  },
  healthLabel: {
    color: '#006C49',
    fontFamily: 'Open Sans',
    fontSize: '1.5rem',
  },
}));
const SingleRecipePage = (props) => {
  const [specificRecipe, setSpecificRecipe] = useState('no recipe');
  const classes = useStyles();
  const history = useHistory();
  const { uri } = useParams();

  useEffect(() => {
    if (!props.location.state) {
      (async () => {
        console.log('fetching');
        const response = await fetch(`/api/recipes/recipe${uri}`);
        const data = await response.json();
        if (response.status !== 200) throw Error(data.message);
        const { data: { recipe } } = data;
        console.log('ello', await recipe);
        setSpecificRecipe(recipe);
      })();
    } else {
      const { location: { state: { recipe } } } = props;
      setSpecificRecipe(recipe);
    }
  }, []);

  const {
    healthLabels,
    image,
    ingredients,
    label,
    source,
    url,
    totalTime,
  } = specificRecipe;
  return (
    <section className={classes.root}>
      <Grid
        container
        spacing={3}
        justify="center"
      >
        {
          specificRecipe === 'no recipe' ? <LoadingComponent />
            : (
              <>
                <Grid item xs={12}>
                  <Typography className={`${classes.fontResponsive} ${classes.title}`} variant="h2">{label}</Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <img src={image} alt={label} className={classes.image} />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <Box m={3}>
                    {healthLabels.map((healthlabel) => (
                      <span className={`${classes.fontResponsive} ${classes.healthLabel}`} key={healthlabel}>
                        &nbsp;
                        {healthlabel}
                        ,
                      </span>
                    ))}
                    <TimeUntil totalTime={totalTime} />
                    <ol className={classes.ol}>
                      {
                        ingredients.map((ingredient, index) => (
                          <li key={`${image}#${index}`} className={classes.li}>
                            {ingredient.text}
                            <span className={classes.measurment}>
                              &nbsp;&nbsp;
                              {`(${Math.round(ingredient.weight)}g)`}
                            </span>
                          </li>
                        ))
                      }
                    </ol>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box>
                    <Typography className={`${classes.fontResponsive} ${classes.title}`} variant="h5">
                      Original Recipe and directions:
                      <Box>
                        <a href={url}>{` ${source} `}</a>
                      </Box>
                    </Typography>
                  </Box>
                </Grid>
              </>
            )
        }
      </Grid>
    </section>
  );
};
export default SingleRecipePage;
