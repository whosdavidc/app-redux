import axios from "axios"


//constants
const datainicial = {
    array: [],
    offset: 0
}

//types
const GET_POKEMONS_SUCCESSFULL = "GET_POKEMONS_SUCCESSFULL"
const NEXT_POKEMON_SUCCESSFULL = "NEXT_POKEMONS_SUCCESSFULL"

//reducer
export default function pokeReducer(state = datainicial , action){ //action = contet from the dispatch
    switch(action.type){
        case GET_POKEMONS_SUCCESSFULL:
            return {...state, array: action.payload}  //with {...state} were saying that the state, becomes from the data saved

        case NEXT_POKEMON_SUCCESSFULL:
            console.log(action.payload.offset);
            return {...state, array: action.payload.array, offset: action.payload.offset}

        default:
            return state
    }
}

//actions
export const GET_POKEMONS = () => async (dispatch, getState) =>{ //with the dispatch we can activate the reducer, and w/getState we can get the initial data 

    //const offset = getState().pokemons.offset;
    const {offset} = getState().pokemons;

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${offset}&offset=200`)
        dispatch({   
            type: GET_POKEMONS_SUCCESSFULL,
            payload: res.data.results
        })
    }catch(error){
        console.log(error);
        console.log("aca rey")
    }
}

export const NEXT_POKEMON = (numero) => async(dispatch, getState) =>{
    const {offset} = getState().pokemons;
    const next = offset + numero

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${next}`)
        dispatch({
            type: NEXT_POKEMON_SUCCESSFULL,
            payload: {
                array: res.data.results,
                offset: next
            }
        })
    } catch (error) {
        console.log(error)
    }
}