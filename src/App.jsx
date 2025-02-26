import React, { useContext } from 'react'
import Navbar from './components/Navbar'

import NewsContext, { NewsProvider } from './context/NewsContext';
import MainPage from './components/MainPage'

const App = () => {
 
  return (
    <NewsProvider>
<Navbar/>
     
     <MainPage/>

      
    </NewsProvider>
  )
}

export default App
