import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './features/Navigation/Navigation'
import Home from './features/Home/Home'
import List from './features/List/List'
import About from './features/About/About'
import Contact from './features/Contact/Contact'
import OpenRecipe from './features/components/Recipe/OpenRecipe'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/list/:recipeID' element={<OpenRecipe/>}/>
          <Route path='/:recipeID' element={<OpenRecipe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
