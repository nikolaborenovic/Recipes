import foodImgOne from '../assets/items/food1.jpg'
import foodImgTwo from '../assets/items/food2.jpg'
import foodImgThree from '../assets/items/food3.jpg'
import foodImgFour from '../assets/items/food4.jpg'
import foodImgFive from '../assets/items/food5.jpg'
import foodImgSix from '../assets/items/food6.jpg'
import foodImgSeven from '../assets/items/food7.jpg'
import foodImgEight from '../assets/items/food8.jpg'



export const recipes = [
    {
        id: 1,
        name: 'Burger',
        ingredients: 'bun, meat, chese',
        recipe: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: foodImgOne
    },
    {
        id: 2,
        name: 'Burger',
        ingredients: 'bun, meat, chese',
        recipe: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: foodImgTwo
    },
    {
        id: 3,
        name: 'Burger',
        ingredients: 'bun, meat, chese',
        recipe: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: foodImgThree
    },
    {
        id: 4,
        name: 'Burger',
        ingredients: 'bun, meat, chese',
        recipe: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: foodImgFour
    },
    {
        id: 5,
        name: 'Burger',
        ingredients: 'bun, meat, chese',
        recipe: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: foodImgFive
    },
    {
        id: 6,
        name: 'Burger',
        ingredients: 'bun, meat, chese',
        recipe: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: foodImgSix
    },
    {
        id: 7,
        name: 'Burger',
        ingredients: 'bun, meat, chese',
        recipe: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: foodImgSeven
    },
    {
        id: 8,
        name: 'Burger',
        ingredients: 'bun, meat, chese',
        recipe: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: foodImgEight
    },
];

export const getAllRecipes = async () => {
    return recipes;
};