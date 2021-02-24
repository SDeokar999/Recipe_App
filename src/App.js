import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
    const APP_ID = "b8582b2d";
    const APP_KEY = "ecaf9a4454e375edcd76ecf7d62316f0";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken")

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
       console.log(response)
        const data = await response.json();
        setRecipes(data.hits);

    }
    const updateSearch = e => {
        setSearch(e.target.value);

    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };
    return (
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button onClick={getSearch} className="search-button" type="button">search</button>
            </form>
            <div className="recipes">   {recipes.map(recipe => (<Recipe
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
            />))}
            </div>
        </div>

    )
};
export default App;