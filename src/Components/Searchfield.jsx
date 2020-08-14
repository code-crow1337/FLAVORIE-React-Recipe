import React from 'react';
// import { fade, makeStyles } from '@material-ui/core/styles';

/* const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'white',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
})); */

const Searchfield = () => {
  // const [category, setCategory] = useState('');

  // const classes = useStyles();

  /*   const getSearchQuery = (e) => {
    setCategory(e.target.value);
  }; */
  /*   const foodCategories = [
    { type: 'mealType', text: 'Breakfast' },
    { type: 'mealType', text: 'Lunch' },
    { type: 'mealType', text: 'Dinner' },
    { type: 'mealType', text: 'Snack' },
    { type: 'mealType', text: 'Teatime' },
    { type: 'dishType', text: 'Alcohol - cocktail' },
    { type: 'dishType', text: 'Biscuits and cookies' },
    { type: 'dishType', text: 'Bread' },
    { type: 'dishType', text: 'Cereals' },
    { type: 'dishType', text: 'Condiments and sauces' },
    { type: 'dishType', text: 'Drinks' },
    { type: 'dishType', text: 'Desserts' },
    { type: 'dishType', text: 'Egg' },
    { type: 'dishType', text: 'Main course' },
    { type: 'dishType', text: 'Omelet' },
    { type: 'dishType', text: 'Pancake' },
    { type: 'dishType', text: 'Preps' },
    { type: 'dishType', text: 'Preserve' },
    { type: 'dishType', text: 'Salad' },
    { type: 'dishType', text: 'Sandwiches' },
    { type: 'dishType', text: 'Soup' },
    { type: 'dishType', text: 'Starter' },
  ]; */
  return (
    <>

      {/*       <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={(e) => getSearchQuery(e)}
          value={category}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search course' }}
        />
      </div> */}
    </>
  );
};

export default Searchfield;
