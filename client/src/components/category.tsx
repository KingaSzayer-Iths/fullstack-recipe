import React from 'react'

import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import Search from './search'
import RecipeCard from './recipecard'

const Category = () => {

    const params = useParams()

    const [categoryRecipes, setCategoryRecipes] = useState<any>([]);

    useEffect(() => {
  
        const loadCategoryRecipes = async () => {
          const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/categories/${params.categoryName}/recipes`);
          const categoryRecipes = await res.json();
          
          setCategoryRecipes(categoryRecipes);
        }
    
        loadCategoryRecipes();
  
      }, [params.categoryName])
  
      return (
          <>
              <Search setRecipes={setCategoryRecipes} url={`${process.env.REACT_APP_API_BASE_URL}/categories/${params.categoryName}/recipes`} />
              {categoryRecipes.map((categoryRecipe: any) =>
              <React.Fragment key={categoryRecipe._id}>
              <RecipeCard recipe={categoryRecipe} />
              </React.Fragment>)}
          </>
      )
}
    
export default Category
