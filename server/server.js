require('dotenv').config();
const { readFile } = require('fs');
const { promisify } = require('util');
const express = require('express');
const bodyParser = require('body-parser');

const readoFilePromise = promisify(readFile);
const app = express();
const port = process.env.PORT || 8080;
const appID = process.env.APP_ID_REC;
const appKey = process.env.API_KEY_REC;
const url = 'https://api.edamam.com/search';
const urlSingleRecpie = 'http://www.edamam.com/ontologies/edamam.owl#';

// TODO when app is finished. I need to change it to making api calls, aka 5 calls/min
// const recipieApi = `${url}?q=desserts&app_id=${appID}&app_key=${appKey}`

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// LOGIC
function findRecipe(recipeURI, data) {
  let tempData = data;
  tempData = JSON.parse(data);
  return tempData.hits.find((item) => item.recipe.uri.includes(recipeURI));
}

app.get('/api/recipes', async (req, res) => {
  let data = [];
  await readoFilePromise('./db.json', 'utf8')
    .then((recipies) => {
      data = recipies;
    })
    .catch((err) => console.log(err));
  res.send(JSON.stringify({ data }));
});
app.get('/api/recipes/:uri', async (req, res) => {
  let data = [];
  const recipeURI = req.params.uri;
  await readoFilePromise('./db.json', 'utf8')
    .then((recipies) => {
      data = recipies;
    })
    .catch((err) => console.log(err));
  const recipe = findRecipe(recipeURI, data);
  res.send(JSON.stringify({ data: recipe }));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
