import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ChefImg from '../../../assets/chef.png'
import axios from "axios"
import './recipe.style.css'

const OpenRecipe = ({ name, image, cuisine, difficulty, prepTime, cookTime, caloriePerServe, serveCount, rating, reviewCount, ingredients, instructions }) => {
    const {recipeID} = useParams();
    const [oneRecipe, setOneRecipe] = useState({});

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
                <div className="oneRecipe_imgInfo">
                    <img src={oneRecipe.image} className="oneRecipe_mealImg"/>
                    <div className="oneRecipe_info">
                        <div className="oneRecipe_info_details">Cuisine: <p>{oneRecipe.cuisine}</p></div>
                        <div className="oneRecipe_info_details">Difficulty: <p>{oneRecipe.difficulty}</p></div>
                        <div className="oneRecipe_info_details">Prep Time: <p>{oneRecipe.prepTimeMinutes}min</p></div>
                        <div className="oneRecipe_info_details">Cook Time: <p>{oneRecipe.cookTimeMinutes}min</p></div>
                        <div className="oneRecipe_info_details">Calories: <p>{oneRecipe.caloriesPerServing}kcal per serve</p></div>
                        <div className="oneRecipe_info_details">Servings: <p>{oneRecipe.servings}</p></div>
                        <div className="oneRecipe_info_details">Rating: <p>{oneRecipe.rating}/5</p></div>
                        <div className="oneRecipe_info_details">Review Count: <p>{oneRecipe.reviewCount}</p></div>
                    </div>
                    <img src={ChefImg} className="chef_img"/>
                </div>
                <div className="oneRecipe_ingredients_instructions">
                    <p>{oneRecipe.ingredients}</p>
                    <p>{oneRecipe.instructions}</p>
                </div>
            </div>
        </div>
    )
}

export default OpenRecipe;