export const NewsReducer=(state,action)=>{

    switch(action.type){

        case "SET_NEWS":
            return {
                ...state,
               news : action.payload
            }
            case  "TOGGLE":
                return{
                    ...state,
                    theme : !state.theme
                }



        default:
            return state
    }
   



}