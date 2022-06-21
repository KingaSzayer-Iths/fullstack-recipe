import styled from "styled-components"



interface SearchTypeStyle {

}

const StyledSearch = styled.input<SearchTypeStyle>`

        box-sizing: border-box;
        background-color: #eaf7ea;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 33px;
        gap: 10px;

        position: relative;
        width: 280px;
        height: 30px;

        border: 1px solid #000000;
        border-radius: 15px;

`


const Search = ({setRecipes, url} : any) => {

    const search = async (text: string)  => {

        const res = await fetch(`${url}?search=${text}`);
        const recipes = await res.json();
        console.log(recipes);

        setRecipes(recipes)
    }

    return <StyledSearch type="text" placeholder="Sök" onChange={(event) => search(event.target.value)}/>
}

export default Search