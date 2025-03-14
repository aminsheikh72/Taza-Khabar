import React, { useEffect, useState, useContext } from 'react';
import NewsContext from '../context/NewsContext'; // Make sure to import the context
import WeatherContext from '../context/WeatheContext';

const Form = () => {
    const [search, setSearch] = useState('');
    const { dispatch,theme } = useContext(NewsContext,WeatherContext); 
 
  

    const FetchApi = async (query = "india") => {
        try {
            const res = await fetch(`https://gnews.io/api/v4/search?q=${query}&apikey=5d1dcdc3ba3675eb24ae087403edbb99`);
            const data = await res.json();

            const newsArray = data.articles.map((article) => ({
                title: article.title,
                description: article.description,
                url: article.url,
                image: article.image
            }));

            dispatch({
                type: "SET_NEWS",
                payload: newsArray
            });

        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    

    useEffect(() => {
        FetchApi();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim() === "") return;
       
        FetchApi(search);
        setSearch("")
    };

    return (
        <form onSubmit={handleSubmit} className='w-full py-5 px-4 flex items-center justify-center flex-wrap'>
            <input 
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='SEARCH ANY NEWS'
                className={theme ? 'focus:outline-none w-full md:w-[70%] py-3 px-3 focus:text-gray-300 placeholder:text-gray-200 border border-gray-200 rounded-md' : 'focus:outline-none w-full md:w-[70%] py-3 px-3 focus:text-gray-900 placeholder:text-gray-900 border border-black-200 rounded-md'}
            />
            <button 
                type="submit"
                className='py-3 px-10 rounded-md bg-red-700 w-full mt-2 md:mt-0 md:w-40 md:mx-1 hover:cursor-pointer font-bold text-white text-lg hover:bg-red-500'
            >
                Search
            </button>
        </form>
    );
};

export default Form;
