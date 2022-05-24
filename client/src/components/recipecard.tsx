import Rating from './rating'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

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

      }, [])

    
    return (<article>
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
    </article>)
}

export default RecipeCard