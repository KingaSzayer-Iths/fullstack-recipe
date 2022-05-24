import RecipeModel, { IRecipe, IIngredient} from "./models/recipe"

export const addRecipe = async (recipe: IRecipe) => {
    const newRecipe = new RecipeModel(recipe)
    await newRecipe.save()
    return newRecipe
}

export const getAllRecipes = async (search: any) => {
    
    let filter = {}
    if (search) 
        filter = {$or: 
            [
                {'title': {$regex: search, $options: "i"}},
                {'description': {$regex: search, $options: "i"}}
            ]}
   
    console.log(filter);

    const all = await RecipeModel.find(filter)
    return all
}

export const getAllCategories = async () => {
    const filter = {}
    const all = await RecipeModel.find(filter).select('category')

    const categories = all.map(cat => cat.category).flat()

    // const occurrences = categories.reduce(function (acc, curr) {
    //     return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    //   }, {})

    const map = categories.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

    // const unique = [... new Set(categories)]
console.log(map);
console.log([... new Set(map)]);

    return [... new Set(map)]
}

export const getRecipesByCategoryName = async (categoryName: String, search: any) => {
    
    let filter = {}
    if (search) 
        filter = {$or: 
            [
                {'title': {$regex: search, $options: "i"}},
                {'description': {$regex: search, $options: "i"}}
            ],
            'category':categoryName
        }
    else 
        filter = {'category':categoryName}

    const recipesByCategoryName = await RecipeModel.find(filter)

    return recipesByCategoryName
}

export const getRecipeById = async (recipeId: string) => {
    const recipe = RecipeModel.findById({"_id": recipeId})
    console.log(recipe);
    
    return recipe
}

export const addRatingToRecipe = async (recipeId: string, rating: number) => {

    const recipe = await RecipeModel.findById({"_id":recipeId})

    if (recipe) {
        recipe.ratings.push(rating)
        recipe.save()
    }
} 