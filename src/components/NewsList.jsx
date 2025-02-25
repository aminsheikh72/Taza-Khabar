import React, { useContext } from 'react';
import NewsContext from '../context/NewsContext';

const NewsList = () => {
    const { news } = useContext(NewsContext);  // ✅ Get news from context
const theme = true
    return (
        <div>
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
