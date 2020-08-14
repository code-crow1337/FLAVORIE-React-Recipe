import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@material-ui/core/';
import { useHistory } from 'react-router-dom';
import RecipeCard from '../Components/RecipeCard';

const formatURI = (recipes) => recipes.map((recipe) => {
  const obj = { ...recipe };
  obj.recipe.uri = recipe.recipe.uri.replace(/^(.*?)#/, '');
  return obj;
});

const RecipePage = () => {
  const history = useHistory();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch('/api/recipes');
      const data = await response.json();
      if (response.status !== 200) throw Error(data.message);
      let { hits: resRecipes } = JSON.parse(data.data);
      resRecipes = formatURI(resRecipes);
      setRecipes(resRecipes);
    }
    fetchRecipes();
  }, []);

  const getSpecifiedRecipe = async (uri) => {
    const { recipe: specifiedRecipe } = recipes.find(({ recipe }) => recipe.uri === uri);
    history.push({
      pathname: '/recipe',
      state: { recipe: specifiedRecipe },
    });
  };

  return (
    <>
      <Box mt={8}>
        <section className="recipes__section">
          <Grid container spacing={2}>
            <Grid container direction="row" justify="center" spacing={3}>
              {recipes !== [] ? recipes.map((obj) => (
                <RecipeCard
                  key={obj.recipe.uri}
                  recipe={obj.recipe}
                  handleRecipe={getSpecifiedRecipe} />
              )) : ''}
            </Grid>
          </Grid>
        </section>
      </Box>
    </>
  );
};

export default RecipePage;
