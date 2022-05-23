import { Schema, model } from 'mongoose'

export interface IIngredient {
    ingredient: string,
    amount: number,
    unit: string
}

const ingredientSchema = new Schema<IIngredient> ({
    ingredient: String,
    amount: Number,
    unit: String
})

const IngredientModel = model("ingredient", ingredientSchema)

export interface IRecipe {
    title: string,
    description: string,
    imageUrl: string,
    timeInMins: number,
    ratings: number[],
    category: string[],
    ingredients: IIngredient[],
    instructions: string[],
    comments: string[]
}

const recipeSchema = new Schema<IRecipe>({
    title: String,
    description: String,
    imageUrl: String,
    timeInMins: Number,
    ratings: [ Number ],
    category: [ String ],
    ingredients: [ ingredientSchema ],
    instructions: [ String ],
    comments: [ String ]
})

const RecipeModel = model("recipe", recipeSchema)

export default RecipeModel