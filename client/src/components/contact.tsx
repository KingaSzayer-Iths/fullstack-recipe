import styled from "styled-components"
import Form from "./form"

interface ContactTypeStyle {

}

const StyledContact = styled.div<ContactTypeStyle>`
    /* background-color: rgb(225, 251, 243); */
    /* background-image: linear-gradient(to bottom right, pink,rgb(225, 251, 243)); */
    background-color: #00ffaa;
    
        /* gap: 5px; */

`

const Contact = () =>
    <StyledContact>
        <h2>Kontakt</h2>
        <Form/>
        
    </StyledContact>

export default Contact