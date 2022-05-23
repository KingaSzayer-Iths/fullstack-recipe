import React from 'react'

import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import Search from './search'
import { Link } from "react-router-dom"
import RecipeCard from './recipecard'

const Category = () => {

    const params = useParams()

    const [categoryRecipes, setCategoryRecipes] = useState<any>([]);

    useEffect(() => {
  
        const loadCategoryRecipes = async () => {
          const res = await fetch(`http://localhost:4000/categories/${params.categoryName}/recipes`);
          const categoryRecipes = await res.json();
          
          setCategoryRecipes(categoryRecipes);
        }
    
        loadCategoryRecipes();
  
      }, [params.categoryName])
  
      return (
          <>
              <Search setRecipes={setCategoryRecipes} url={`http://localhost:4000/categories/${params.categoryName}/recipes`} />
              {categoryRecipes.map((categoryRecipe: any) =>
              <React.Fragment key={categoryRecipe._id}>
              <RecipeCard recipe={categoryRecipe} />
              <Link to={`/recipes/${categoryRecipe._id}`}>Öppna recept</Link>
              </React.Fragment>)}
          </>
      )
}
    
export default Category
