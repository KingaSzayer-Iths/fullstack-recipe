
import { useParams } from "react-router-dom"

const Rating = ({rating,recipe}:any) => {

    const rate = async (rate : number) => {

        const res = await fetch(`http://localhost:4000/recipes/${recipe._id}/ratings`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([rate])
           })
    }

    return <>
    <img onClick={() => rate(1)} src={require(rating > 0 ? '../images/full-star.png' : '../images/empty-star.png')} alt="" />
    <img onClick={() => rate(2)} src={require(rating > 1 ? '../images/full-star.png' : '../images/empty-star.png')} alt="" />
    <img onClick={() => rate(3)} src={require(rating > 2 ? '../images/full-star.png' : '../images/empty-star.png')} alt="" />
    <img onClick={() => rate(4)} src={require(rating > 3 ? '../images/full-star.png' : '../images/empty-star.png')} alt="" />
    <img onClick={() => rate(5)} src={require(rating > 4 ? '../images/full-star.png' : '../images/empty-star.png')} alt="" />
    </>
}

export default Rating