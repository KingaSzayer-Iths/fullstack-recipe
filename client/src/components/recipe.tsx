import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Rating from './rating'


interface RecipeTypeStyle {

}

const StyledRecipe = styled.div<RecipeTypeStyle>`
    /* background-color: rgb(225, 251, 243); */
    background-image: linear-gradient(to bottom right, pink,rgb(225, 251, 243));
`

const Recipe = () => {

    const params = useParams()

    const [recipe, setRecipe] = useState<any>([]);
    const [average, setAverage] = useState<any>([]);

    useEffect(() => {
  
        const openRecipe = async () => {
        
            const res = await fetch(`http://localhost:4000/recipes/${params.recipeId}`)
            const recipe = await res.json()

            setRecipe(recipe)

          
            calculateRating(recipe.ratings)  
        }
    
        openRecipe()

        const calculateRating = async (ratings : number[]) => { 

            var sum = ratings.reduce(function (x, y) {
                return x + y;
            }, 0);

            let average = 0 
            if (sum > 0 && ratings.length > 0)
                average = sum/ratings.length

            setAverage(average)
          }


      }, [params.recipeId])

      
  
    return <StyledRecipe>
    <header>
        <h2>{recipe.title}</h2>
    </header>

    <main>
        <div>
        <p>{recipe.description}</p>

                
            
            <img src={recipe.imageUrl} alt="" />

            <p>{recipe.ingredients && recipe.ingredients.length} INGREDIENSER | {recipe.timeInMins} MINUTER</p>
        </div>

            <p>Ingredienser</p>
            <ul>
            <ul>{recipe.ingredients && recipe.ingredients.map((ingredient: any) => <li key={ingredient._id}>{ingredient.amount} {ingredient.unit} {ingredient.ingredient} </li>)}</ul>
            </ul>
            <p>Gör så här</p>
            <ol>{recipe.instructions && recipe.instructions.map((instruction: string) => <li key={instruction}>{instruction}</li>)}</ol>
    </main>

    <footer>
        <p>Vad tyckte du om receptet</p>
        <p>Klick på en sjärna för att ge ditt betyg!</p>
        <Rating rating={average} recipe={recipe} />

    </footer>
    </StyledRecipe>
}

export default Recipe