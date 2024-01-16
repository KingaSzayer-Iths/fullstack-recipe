import styled from "styled-components"
import Collect from "./collect"

interface CollectletterTypeStyle {

}

const StyledCollectletter = styled.div<CollectletterTypeStyle>`
    /* background-color: rgb(225, 251, 243); */
    /* background-image: linear-gradient(to bottom right, pink,rgb(225, 251, 243)); */
    background-color: #bdc7c4;
    border-radius: 8px;
     /* gap: 5px; */

        h2 {
        color: #6a4f92;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        padding-top: 20px;
        border-radius: 8px;
    }

        .collectletter {
        
        }

`

const Collectletter = () =>
    <StyledCollectletter>
        <h2 className="collectletter">Prenumerera</h2>
        <Collect />
        
    </StyledCollectletter>

export default Collectletter