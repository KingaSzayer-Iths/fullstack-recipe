import { Router } from 'express'
import { addRecipe, getAllRecipes, getAllCategories, getRecipesByCategoryName, getRecipeById, addRatingToRecipe } from '../db/recipe'

const router = Router()

router.post('/recipe', async (req, res) => {
    const recipe = await addRecipe(req.body)
    res.json(recipe)
})

router.get('/recipes', async (req, res) => {

    const search = req.query.search

    console.log(search)
    
    const recipes = await getAllRecipes(search)
    res.status(201).json(recipes)
})

router.get('/recipes/:recipeId', async (req, res) => {
    const recipeId = req.params.recipeId

    const recipe = await getRecipeById(recipeId)
    res.status(201).json(recipe)
})

router.get('/categories', async (req, res) => {
    const categories = await getAllCategories()
    res.status(201).json(categories)
})

router.get('/categories/:categoryName/recipes', async (req, res) => {

    const categoryName = req.params.categoryName
    const search = req.query.search

    const categories = await getRecipesByCategoryName(categoryName, search)
    res.status(201).json(categories)
})

router.post('/recipes/:recipeId/ratings', async (req, res) => {
    const recipeId = req.params.recipeId

    const rating=parseInt(req.body)

    const recipe = await addRatingToRecipe(recipeId, rating)
    res.status(201).json(recipe)
})

export default router
