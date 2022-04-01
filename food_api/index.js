const express = require('express');
const app = express();
const axios = require('axios');
var cors = require('cors');

const API = '9a0e0076d4614aabb20bfcc73cccf3ce';
const url_api_ingredients = 'https://api.spoonacular.com/recipes/findByIngredients';

app.use(cors());


app.get('/test', (req,res) => {
    res.send("La route test fonctionne bien")
})

// GET infos about recipe by ingredient
app.get(`/foodapi/byingredients/:ingredients`, (req, res, next) => {
    console.log(req.params.ingredients);
    var ingredient = req.params.ingredients;
    axios.get(`${url_api_ingredients}?apiKey=${API}&ingredients=${ingredient}`)
        .then(response => {
            console.log(response)
            res.json(response.data);
        })
})

app.listen(8000, () => {
    console.log('Serveur API écoute');
})