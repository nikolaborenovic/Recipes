import { getAllRecipes } from '../../data/itemData';
import Recipe from '../components/Recipe/recipe';
import './list.style.css'
import { useState, useEffect } from 'react'

const List = () => {
    const [list, setList] = useState([]);

    useEffect (() => {
        getAllRecipes().then((response) => {
            setList(response)
        })
    }, [])



    return(
        <div className='recipeList_holder'>
            <div className='recipeList_wrapper'>
                {list.map((item) => (
                    <Recipe
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    ingredients={item.ingredients}
                    />
                ))}
            </div>
        </div>
    )
}

export default List;