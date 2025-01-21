import './recipe.style.css'

const Recipe = ({image, name, ingredients}) => {
    return(
        <div className='recipe_wrapper'>
            <div className='recipe_holder'>
                <div className='image_wrapper'>
                    <img src={image}/>
                </div>
                <div className='recipe_info'>
                <p>{name}</p>
                <p>Ingredients: <span>{ingredients}</span></p>
                <button>READ MORE</button>
                </div>
            </div>
        </div>
    )
}
export default Recipe;