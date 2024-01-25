import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Header from './Header'
import RecipesList from './RecipesList'

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <NavBar/>
      <Header setSearchTerm={setSearchTerm}/>
      <RecipesList searchTerm={searchTerm}/>
    </div>
  )
}

export default Homepage
