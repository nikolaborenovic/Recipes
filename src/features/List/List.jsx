import axios from 'axios';
import Recipe from '../components/Recipe/recipe';
import './list.style.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button.jsx';

const List = () => {
    const [list, setList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleRedirect = (route) => {
        navigate(route)
    }


    useEffect (() => {
        axios
        .get('https://dummyjson.com/recipes').then((response) =>{
            setList(response.data.recipes)
        }).catch((error) =>{
            console.log(error, 'ERROR')
          })
    }, [])

    const filterRecipes = () => {
        return list
        .filter(item => item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
    }



    return(
        <div className='recipeList_holder'>
            <input
            className='search_bar'
            type='text'
            placeholder='search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className='recipeList_wrapper'>
                {filterRecipes().map((listItem) => {
                    return(
                        <div className='recipeList_oneRecipe'>
                        <Recipe
                        key={listItem.id}
                        image={listItem.image}
                        name={listItem.name}
                        prepTime={listItem.prepTimeMinutes}
                        cookTime={listItem.cookTimeMinutes}
                        rating={listItem.rating}
                        calories={listItem.caloriesPerServing}
                        />
                        <div className='recipeList_button'>
                            <Button
                            buttonText='READ MORE'
                            buttonColour='#f9ca24'
                            buttonClick ={() => handleRedirect(`${listItem.id}`)}
                            />
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List;