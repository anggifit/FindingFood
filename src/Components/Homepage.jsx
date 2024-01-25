import React from 'react'
import NavBar from '../Components/NavBar'
import RecipesList from './RecipesList'

const Homepage = () => {
  return (
    <div 
      className="bg-cover bg-center h-screen" 
      style={{ backgroundImage: `url('./src/assets/bg-img.jpg')`}}
    >
      <NavBar/>
      <RecipesList/>
    </div>
  )
}

export default Homepage
