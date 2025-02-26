import { createContext, useReducer } from "react";
import { NewsReducer } from "./NewsReducer";

const NewsContext = createContext()

export const NewsProvider=({children})=>{

    const themeExist = JSON.parse(localStorage.getItem("theme"))
    const initialState = {
       news : [],
       theme : themeExist || null
    }
    const [state,dispatch]= useReducer(NewsReducer,initialState)

    return(


        <NewsContext.Provider value={{...state,dispatch}} >{children}</NewsContext.Provider>
    )

}


export default NewsContext