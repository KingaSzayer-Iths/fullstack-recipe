import styled from "styled-components"
import Logo from './logo'

interface MainheaderTypeStyle {

}

const StyledMainheader = styled.header<MainheaderTypeStyle>`
    /* background-color: rgb(225, 251, 243); */
    /* background-image: linear-gradient(to bottom right, pink,rgb(225, 251, 243)); */
    background-image: linear-gradient(to bottom right, #fa3656,rgb(225, 251, 243));
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;
    /* gap: 5px; */

`

const Mainheader = () =>
    <StyledMainheader>
        <Logo />
        <h1>Polska desserter</h1>
        <p>Välkommen till polska efterrätter. Låt dig inspireras av mina polska bakverk. Här hittar du många populära recept med polsk tradition och traditionella polska ingredienser.</p>
    </StyledMainheader>

export default Mainheader