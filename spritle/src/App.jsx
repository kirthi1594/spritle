import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Animation from './Components/Animation/Animation'

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Animation/>
      <Home/>
    </div>
  )
}

export default App