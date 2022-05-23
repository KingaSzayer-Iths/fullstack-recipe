import React, { useEffect, useState } from 'react';
import styled from "styled-components"

const Search = ({setRecipes, url} : any) => {

    const [foundRecipes, setFoundRecipes] = useState<any>()

    const search = async (text: string)  => {

        const res = await fetch(`${url}?search=${text}`);
        const recipes = await res.json();
        console.log(recipes);

        setRecipes(recipes)
    }

    return <input type="text" onChange={(event) => search(event.target.value)}/>
}

export default Search