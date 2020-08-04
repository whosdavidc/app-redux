import axios from "axios"


//constants
const datainicial = {
    array: []
}

//types
const GET_POKEMONS_SUCCESSFUL = "GET_POKEMOS_SUCCESFULL"

//reducer
export default function pokeReducer(state = datainicial , action){
    switch(action.type){
        case GET_POKEMONS_SUCESSFUL:
            return {...state, array: action.payload}  //with {...state} were saying that the state, becomes from the data saved
        default:
            return state
    }
}

//actions
export const GET_POKEMONS_SUCESSFUL = () => async (dispatch, getState) =>{ //with the dispatch we can activate the reducer, and w/getState we get the initial data 
    try {
        const res = await axios.get("https://pokemon?limit=100&offset=200")
        dispatch({   
            type: GET_POKEMONS_SUCCESSFUL,
            payload: res.date.results
        })
    }catch(error){
        console.log(error);
    }
}