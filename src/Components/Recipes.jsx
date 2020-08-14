import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@material-ui/core/';
import { useHistory } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const formatURI = ({ hits }) => {
  return hits.map((recipe) => {
    const obj = { ...recipe };
    obj.recipe.uri = recipe.recipe.uri.replace(/^(.*?)#/, '');
    return obj;
  });
};
const Recipies = () => {
  const history = useHistory();
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch('/api/recipes');
      const data = await response.json();
      if (response.status !== 200) throw Error(data.message);
      let temp = JSON.parse(data.data);
      setRecipes(temp.hits);
      temp = formatURI(temp);
    }
    fetchRecipes();
  }, []);

  const fetchRecipe = async (uri) => {
    const response = await fetch(`/api/recipes/${uri}`);
    const data = await response.json();
    if (response.status !== 200) throw Error(data.message);
    history.push({
      pathname: '/recipe',
      state: { recipe: data.data.recipe },
    });
  };

  return (
    <>
      <Box mt={8}>
        <section className="recipes__section">
          <Grid container spacing={2}>
            <Grid container direction="row" justify="center" spacing={3}>
              {recipes ? recipes.map((obj) => (
                <RecipeCard key={obj.recipe.uri} recipe={obj.recipe} handleRecipe={fetchRecipe} />
              )) : ''}
            </Grid>
          </Grid>
        </section>
      </Box>
    </>
  );
};

export default Recipies;
