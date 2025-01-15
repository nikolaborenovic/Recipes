import { useEffect, useState } from 'react'
import '../home.style.css'
import { getAllRecipes } from '../../../data/itemData'
import Recipe from '../../components/Recipe/recipe'

const SectionTwo = () => {
    const [sectionTwoContent, setSectionTwoContent] = useState([])
    useEffect (() => {
            getAllRecipes().then((response) => {
                setSectionTwoContent(response.splice(0, 4))
            })
        }, [])
        console.log(sectionTwoContent)
    return(
        <div className='sectionTwo_holder'>
            <div className='sectionTwo_wrapper'>
                <h2>Featured recipes, easy and fun:</h2>
                <div className='sectionTwo_featuredItems'>
                    {sectionTwoContent.map((item) => (
                        <Recipe
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        ingredients={item.ingredients}
                        recipe={item.recipe}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;