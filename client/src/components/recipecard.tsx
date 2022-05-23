
const RecipeCard = ({ recipe }: any ) => {
    


    return (<article>
        <h2>{recipe.title}</h2>
        <img src="" alt="" />
            <p>{recipe.description}</p>
        <footer>
            <p>{recipe.ingredients.length} INGREDIENSER | {recipe.timeInMins} MINUTER</p>
        </footer>
    </article>)
}

export default RecipeCard