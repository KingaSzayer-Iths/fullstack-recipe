import styled from "styled-components"
import {useState} from "react"

interface FormTypeStyle {

}

const StyledForm = styled.form<FormTypeStyle>`
    /* background-color: rgb(225, 251, 243); */
    /* background-image: linear-gradient(to bottom right, pink,rgb(225, 251, 243)); */
    background-color: #afd2d4;
    
    /* input {
        border-radius: 10px;
    } */
        /* gap: 5px; */

`

function Form() {
    const [formData, setFormData] = useState(
        {firstName: "", lastName: "", email: "", comments: "", isFriendly: true, employment: "", favColor: ""}
    )
    // console.log(formData.favColor)

    function handleChange(event:any) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
      
    }

    function handleSubmit (event:any) {
        event.preventDefault()
        // submitToApi(formData)

        console.log(formData)
    }

    return <StyledForm>
       <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" onChange={handleChange} name="firstName" value={formData.firstName} />
            <input type="text" placeholder="Last Name" onChange={handleChange} name="lastName" value={formData.lastName} />
            <input type="email" placeholder="Email" onChange={handleChange} name="email" value={formData.email} />
            <input placeholder="Comments" onChange={handleChange} name="comments" value={formData.comments} />
            <input type="checkbox" id="isFriendly" checked={formData.isFriendly} onChange={handleChange} name="isFriendly" />
            <label htmlFor="idFriendly">Are you friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>

                <input type="radio" id="unemployed" name="employment" value="unemployed" 
                checked={formData.employment === "unemployed"} onChange={handleChange} />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input type="radio" id="part-time" name="employment" value="part-time"
                checked={formData.employment === "part-time"} onChange={handleChange} />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input type="radio" id="full-time" name="employment" value="full-time" 
                checked={formData.employment === "full-time"} onChange={handleChange} />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select id="favColor" value={formData.favColor} onChange={handleChange} name="favColor">
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
       </form>
        
    </StyledForm>
}

export default Form