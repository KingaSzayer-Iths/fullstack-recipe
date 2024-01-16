import styled from "styled-components"
import { useState } from "react"

interface CollectTypeStyle {

}

const StyledCollect = styled.div<CollectTypeStyle>`
    /* background-color: rgb(225, 251, 243); */
    /* background-image: linear-gradient(to bottom right, pink,rgb(225, 251, 243)); */
    /* background-color: #c1c5ba; */
    
    .form-input {
        border-radius: 10px;
    }

    .collect-form {
        display: grid;
        margin: 5px 20px;
        padding: 20px 20px;
        row-gap: 8px;
    }

    .collect-container {
        background-color: #a1b0ae;
        padding: 0px;
        border-radius: 8px;
    }

    .collect-submit {
        border-radius: 8px;
        margin-left: 60px;
        margin-right: 60px;
        background-color: #d8c5d6;
    }
`

function Collect() {
    const [formData, setFormData] = useState(
        { email: "", password: "", passwordConfirm: "", collectNewsletter: true }
    )

    function handleChange(event: any) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    
    // console.log(formData)

    function handleSubmit(event: any) {
        event.preventDefault()
        console.log(formData)
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully sign up")
        } else {
            console.log("Passwords do not match")
            return
        }

        if(formData.collectNewsletter) {
            console.log("Thanks for signing up for new recipes!")
        }
    }

    return <StyledCollect>
        <div className="collect-container">
            <form className="collect-form" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email address" className="form-input" name="email" onChange={handleChange} value={formData.email} />
                <input type="password" placeholder="Password" className="form-input" name="password" onChange={handleChange} value={formData.password} />
                <input type="password" placeholder="Confirm password" className="form-input" name="passwordConfirm" onChange={handleChange} value={formData.passwordConfirm} />

                <div className="collect-marketing">
                    <input id="okayToEmail" type="checkbox" name="collectNewsletter" onChange={handleChange} checked={formData.collectNewsletter} />
                    <label htmlFor="okayToEmail">I want to collect the recipes</label>
                </div>
                <button type="submit" className="collect-submit">Sign up</button>
            </form>
        </div>
    </StyledCollect>
}

export default Collect