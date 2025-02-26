import React, { useContext, useEffect, useState } from 'react';
import NewsContext from '../context/NewsContext';
import WeatherContext from '../context/WeatheContext';

const NewsList = () => {
    const { news,theme } = useContext(NewsContext);
    const {dispatch,weather} = useContext(WeatherContext)  
    const [search,setSearch]= useState("")
    const getWeather=async( query = "delhi")=>{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=b8c924ed5b159e882e796a6f5e4cbfed&units=metric`)
        const data = await res.json()
        console.log(data);
        dispatch({type : "GET_WEATHER",
            payload : data
        })
    }
    const handle = (e)=>{
        e.preventDefault()
        getWeather(search)


        setSearch("")


    }
    useEffect(()=>{
getWeather()
    },[])

    return (
        <div className=' flex flex-col items-center'>
        <div className={theme ? " w-full md:w-1/2 border border-gray-200 p-3 " :" w-full md:w-1/2 border p-3 "}>
        <form onSubmit={handle} className='flex flex-col' >
        <div className=' flex items-center justify-center'>
            <input onChange={(e)=>setSearch(e.target.value)} value={search} className={theme ?' bg-white p-2 rounded-md w-3/4 outline-none': ' bg-gray-800 text-white p-2 rounded-md w-3/4 outline-none'} type="text" placeholder='Enter the city' />
            <button className=' bg-amber-600 py-2 px-4 rounded-md mx-2' type='submit' >Search</button>
            </div>
            <div className=' md:px-10'>
            <h1 className={theme ? ' text-2xl text-gray-200 font-bold my-2 ' : ' text-2xl text-black font-bold my-2'}>city : {weather?.name || "Loading"} </h1>
            <p className={theme ? 'text-xl text-gray-200 my-2' : 'text-xl text-black my-2'}>Temp : {weather?.main?.temp ?? "N/A"} </p>
            <p className={theme ? 'text-xl text-gray-200 my-2' : 'text-xl text-black my-2'}>Feels-Like: {weather?.main?.feels_like ?? "N/A"} </p>
            <p className={theme ? 'text-xl text-gray-200' : 'text-xl text-black'}>Wind Speed: {weather?.wind?.speed ?? "N/A"} </p>


            </div>
        </form>

        </div>
            {news.length === 0 ? <p>No news found.</p> : (
                news.map((item, index) => (
                    <div 
                        key={index} 
                        className=" p-4 border border-gray-300 rounded-md my-2 flex flex-col md:flex-row items-start md:items-between"
                    >
                      
                        <div className="w-full md:w-1/2 p-2">
                            <h2 className={theme ? "text-xl font-bold text-gray-200 md:text-3xl" : "text-xl font-bold text-gray-900 md:text-3xl"}>{item.title}</h2>
                            <p className={theme ?'text-gray-300 my-2 md:my-4' :'text-gray-900 my-2 md:my-4'}>{item.description}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read More</a>
                        </div>

                       
                        {item.image && (
                            <div className="w-full md:w-1/2 p-2">
                                <img src={item.image} alt={item.title} className="w-full h-auto rounded-md" />
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default NewsList;
