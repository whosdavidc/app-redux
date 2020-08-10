import axios from "axios"


//constants
const datainicial = {
    count: 0,
    next: null, 
    previous: null,
    results: []
}

//types
const GET_POKEMONS_SUCCESSFULL = "GET_POKEMONS_SUCCESSFULL"
const NEXT_POKEMON_SUCCESSFULL = "NEXT_POKEMONS_SUCCESSFULL"

//reducer
export default function pokeReducer(state = datainicial , action){ //action = contet from the dispatch
    switch(action.type){
        case GET_POKEMONS_SUCCESSFULL:
            return {...state, ...action.payload}  //with {...state} were saying that the state, becomes from the data saved

        case NEXT_POKEMON_SUCCESSFULL:
            return {...state, ...action.payload}

        default:
            return state
    }
}

//actions
export const GET_POKEMONS = () => async (dispatch, getState) =>{ //with the dispatch we can activate the reducer, and w/getState we can get the initial data 

    if(localStorage.getItem("OFFSET=0")){
        console.log("data from the localStorage")
        dispatch({
            type: GET_POKEMONS_SUCCESSFULL,
            payload: JSON.parse(localStorage.getItem("OFFSET=0"))
        })
        return
    }


    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
        console.log("data from the API")
        dispatch({   
            type: GET_POKEMONS_SUCCESSFULL,
            payload: res.data
        })
        localStorage.setItem("OFFSET=0", JSON.stringify(res.data))
    }catch(error){
        console.log(error);
    }
}

export const NEXT_POKEMON = () => async(dispatch, getState) =>{

    const {next} = getState().pokemons
 
    if(localStorage.getItem(next)){
        console.log("data from the localStorage")
        dispatch({
            type: GET_POKEMONS_SUCCESSFULL,
            payload: JSON.parse(localStorage.getItem(next))
        })
        return
    }
    try {
        const res = await axios.get(next)
        dispatch({
            type: NEXT_POKEMON_SUCCESSFULL,
            payload: res.data
        })
        localStorage.setItem(next, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const PREV_POKEMON = () => async(dispatch, getState) =>{
     const {previous} = getState().pokemons
 
     if(localStorage.getItem(previous)){
        console.log("data from the localStorage")
        dispatch({
            type: GET_POKEMONS_SUCCESSFULL,
            payload: JSON.parse(localStorage.getItem(previous))
        })
        return
    }
 
     try {
        const res = await axios.get(previous)
        dispatch({
            type: NEXT_POKEMON_SUCCESSFULL,
            payload: res.data
        })
        localStorage.setItem(previous, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }

    
}