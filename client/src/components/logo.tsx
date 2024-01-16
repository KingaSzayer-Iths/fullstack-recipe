import styled from "styled-components"

interface LogoTypeStyle {

}

const StyledLogo = styled.div<LogoTypeStyle>`
    /* background-color: rgb(225, 251, 243); */
    /* background-image: linear-gradient(to bottom right, pink,rgb(225, 251, 243)); */
    width: 100%;
    height: 80px;
    background-color: rgb(225, 215, 224);
    color: #f62626;
    padding: 20px;
    
    
`

const Logo= () =>
    <StyledLogo>
        <h1>LOGO</h1>
        {/* <ul>
            <li><Link to={`/`}>Hem</Link></li>
            <li><Link to={`/contact`}>Feedback</Link></li>
        </ul> */}
    </StyledLogo>

export default Logo