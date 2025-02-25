import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Categories from './components/Categories'

import NewsList from './components/NewsList'
import { NewsProvider } from './context/NewsContext';

const App = () => {
  const theme = true
  return (
    <NewsProvider>
<Navbar/>
      <div className = {theme ? "w-full min-h-screen bg-gray-900 p-10 " : "w-full min-h-screen bg-gray-100 p-10 "} >
      <h1 className=' text-4xl text-center font-bold text-gray-600'>Get All Tranding News Around The World 24/7 </h1>
      <p className=' py-5 text-md text-center font-bold text-gray-600'>Get all latest and trending news from around the world, you will be getting news from trusted sources</p>
      <Form/>
      
      <Categories/>
      <NewsList/>

      </div>
    </NewsProvider>
  )
}

export default App
