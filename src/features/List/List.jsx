import axios from 'axios';
import Recipe from '../components/Recipe/recipe';
import './list.style.css'
import { useState, useEffect } from 'react'

const List = () => {
    const [list, setList] = useState([]);

    useEffect (() => {
        axios
        .get('https://dummyjson.com/recipes').then((response) =>{
            setList(response.data.recipes)
        }).catch((error) =>{
            console.log(error, 'ERROR')
          })
    }, [])

 console.log(list)

    return(
        <div className='recipeList_holder'>
            <input
            className='search_bar'
            type='text'
            placeholder='search'
            />
            <div className='recipeList_wrapper'>
                {list.map((listItem) => {
                    return(
                        <Recipe
                        key={listItem.id}
                        image={listItem.image}
                        name={listItem.name}
                        prepTime={listItem.prepTimeMinutes}
                        cookTime={listItem.cookTimeMinutes}
                        rating={listItem.rating}
                        calories={listItem.caloriesPerServing}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default List;