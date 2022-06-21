import styled from "styled-components"
import Rating from './rating'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

interface RecipeCardTypeStyle {

}

const StyledRecipeCard = styled.article<RecipeCardTypeStyle>`
    /* background-color: rgb(225, 251, 243); */
    background-image: linear-gradient(to bottom right, pink,rgb(225, 251, 243));
    display: flex;
    flex-direction: column;
    
    
    div {
        display: flex;
        flex-direction: row;
        /* vertical-align: middle; */
        align-items: center;
        justify-content: space-between;
    }
`

const RecipeCard = ({ recipe }: any ) => {

    const [average, setAverage] = useState<any>([]);

    useEffect(() => {
  

        const calculateRating = async (ratings : number[]) => { 

            var sum = ratings.reduce(function (x, y) {
                return x + y;
            }, 0);

            let average = 0 
            if (sum > 0 && ratings.length > 0)
                average = sum/ratings.length

            setAverage(average)
          }

          calculateRating(recipe.ratings)  

      }, [recipe.ratings])

    
    return (<StyledRecipeCard>
        <div>
            <h2>{recipe.title}</h2>
            <Rating rating={average} recipe={recipe} />
        </div>
        <div>
            <img width="150px" src={recipe.imageUrl} alt="" />
            <p>{recipe.description}</p>
        </div>
        <footer>
            <p>{recipe.ingredients.length} INGREDIENSER | {recipe.timeInMins} MINUTER</p>
        </footer>
        <Link to={`/recipes/${recipe._id}`}>Öppna recept</Link>
        <hr />
    </StyledRecipeCard>)
}

export default RecipeCard