import React from 'react'
import Search from './search'
import { useEffect, useState } from 'react';
import Recipe from './recipe'
import { Link } from "react-router-dom"
import RecipeCard from './recipecard'

const Home = () => {
    const [recipes, setRecipes] = useState<any>([]);
  
    useEffect(() => {
  
      const loadRecipes = async () => {
        const res = await fetch(`http://localhost:4000/recipes`)
        const recipes = await res.json()
        console.log(recipes);
        setRecipes(recipes);
      }
  
      loadRecipes();

    }, [])

    return (
        <>
            <Search setRecipes={setRecipes} url='http://localhost:4000/recipes/' />
            {recipes.map((recipe: any) =>
            <React.Fragment key={recipe._id}>
            {/* <h2>{recipe.title}</h2>
            <ul>
                {recipe.ingredients.map((ingredient: any) => <li key={ingredient._id}>{ingredient.ingredient}</li>)}
            </ul> */}
                <RecipeCard recipe={recipe} />
                <Link to={`/recipes/${recipe._id}`}>Öppna recept</Link>
            </React.Fragment>)}
        </>
    )
}

  export default Home