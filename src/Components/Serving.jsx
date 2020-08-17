import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Box } from '@material-ui/core/';

const BootstrapInput = withStyles((theme) => ({
  root: {
    width: '100%',
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: '1.3rem',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,228,255,.25)',
    },
    fontFamily: [
      'Lora, serif',
      '"Helvetica Neue"',
    ].join(','),
  },
}))(InputBase);
const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '2rem',
    color: '#e4686a',
    fontFamily: [
      'Lora, serif',
      '"Helvetica Neue"',
    ].join(','),
    lineHeight: '1rem',
  },
  form: {
    width: '100%',
  },
}));

const Serving = ({ servings, ingredients, renderIngredients }) => {
  const [currServings, setCurrServings] = useState(servings);
  const classes = useStyles();

  const renderSelections = () => {
    const selectionArr = ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'];
    return selectionArr.map((serving, index) => (
      <option key={`${index}_ingredient`} value={serving}>
        {serving}
      </option>
    ));
  };
  const calculateIngredients = () => {
    if (!ingredients) return '';
    return ingredients.map((ingredient) => {
      const temp = {...ingredient};
      temp.weight = (ingredient.weight / servings) * currServings;
      return temp;
    });
  };

  useEffect(() => {
    renderIngredients(calculateIngredients());
  }, [currServings]);

  return (
    <Box m={1} mt={4}>
      <FormControl className={classes.form}>
        <InputLabel className={classes.root} htmlFor="select-servings-label">Number of servings</InputLabel>
        <NativeSelect
          id="select-servings-label"
          value={currServings}
          onChange={(e) => setCurrServings(e.target.value)}
          input={<BootstrapInput />}
        >
          {renderSelections()}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default Serving;
