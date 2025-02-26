import React, { useContext } from 'react'
import NewsContext from '../context/NewsContext'


const Navbar = () => {

  const {theme, dispatch}= useContext(NewsContext)


  const toggleTheme=()=>{
    dispatch({type : "TOGGLE"})
    localStorage.setItem('theme', JSON.stringify(!theme))
  }
  
  return (
    <nav className={theme ? ' w-full p-6 bg-gray-900 border border-b-gray-100 flex items-center justify-between': ' w-full p-6 bg-gray-100 border border-b-gray-900 flex items-center justify-between'}>
    <h1 className=' text-xl font-bold uppercase text-red-600'>taza <span className=' text-sky-400'>kabar</span></h1>
   
    <label className="switch">
    <input onChange={toggleTheme} checked={!theme} type="checkbox"/>
    <span className="slider"></span>
</label>
    
  </nav>
  )
}

export default Navbar
