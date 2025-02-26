import React, { useContext } from 'react'
import Navbar from './components/Navbar'


import MainPage from './components/MainPage'
import { WeatherProvider } from './context/WeatheContext'

const App = () => {
 
  return (
    <WeatherProvider>
<Navbar/>
     
     <MainPage/>

      
    </WeatherProvider>
  )
}

export default App
