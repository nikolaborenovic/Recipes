import './recipe.style.css'

const Recipe = ({image, name, prepTime, cookTime, rating, calories}) => {
    return(
        <div className='recipe_wrapper'>
            <div className='recipe_holder'>
                <div className='image_wrapper'>
                    <img src={image}/>
                </div>
                <div className='recipe_info'>
                    <p className='recipe_infoName'><span>Name:</span> {name}</p>
                    <div className='recipe_info_details'>
                        <div className='recipe_info_prepCook'>
                            <p><span>Prep:</span> {prepTime}min</p>
                            <p><span>Cook:</span>  {cookTime}min</p>
                        </div>
                        <div className='recipe_info_ratingCalories'>
                            <p><span>Rating:</span>  {rating}/5</p>
                            <p><span>Calories:</span>  {calories}</p>
                        </div>
                    </div>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    )
}
export default Recipe;