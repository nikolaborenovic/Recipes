import { useEffect, useState } from 'react'
import '../home.style.css'
import Recipe from '../../components/Recipe/recipe'
import axios from 'axios'

const SectionTwo = () => {
    const [sectionTwoContent, setSectionTwoContent] = useState([])
    useEffect (() => {
        axios
        .get('https://dummyjson.com/recipes').then((response) =>{
            setSectionTwoContent(response.data.recipes.splice(0,4))
        }).catch((error) =>{
            console.log(error, 'ERROR')
          })
        }, [])
        console.log(sectionTwoContent)
    return(
        <div className='sectionTwo_holder'>
            <div className='sectionTwo_wrapper'>
                <h2>Featured recipes, <span className='sectionTwo_headerSpan'>easy and fun:</span></h2>
                <div className='sectionTwo_featuredItems'>
                    {sectionTwoContent.map((listItem) => (
                        <Recipe
                        key={listItem.id}
                        image={listItem.image}
                        name={listItem.name}
                        prepTime={listItem.prepTimeMinutes}
                        cookTime={listItem.cookTimeMinutes}
                        rating={listItem.rating}
                        calories={listItem.caloriesPerServing}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;