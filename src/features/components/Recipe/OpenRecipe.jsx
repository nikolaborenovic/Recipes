import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import './recipe.style.css'

const OpenRecipe = ({ name, image, cuisine, difficulty, prepTime, cookTime, caloriePerServe, serveCount, rating, reviewCount, ingredients, instructions }) => {
    const {recipeID} = useParams();
    const [oneRecipe, setOneRecipe] = useState();

    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const response = await axios.get(
                    `https://dummyjson.com/recipes/${recipeID}`);
                    setOneRecipe(response.data)
            } catch (error) {
                console.error('ERROR FETCHING USER DATA', error)
            }
        }
        fetchRecipeData()
        
    }, [])
    console.log(oneRecipe)
    return(
        <div className="oneRecipe_holder">
            <div className="oneRecipe_wrapper">
                <h2>{oneRecipe.name}</h2>
            </div>
        </div>
    )
}

export default OpenRecipe;