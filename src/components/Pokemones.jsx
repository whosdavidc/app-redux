import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { GET_POKEMONS, NEXT_POKEMON, PREV_POKEMON } from "../redux/pokeDucks";


const Pokemones = () => {
    const dispatch = useDispatch()


    const pokemones = useSelector(store => store.pokemons.results)  //useSelector = A hook to acess the redux´s state

    return (
        <div>
            <h1>Lista de pokemons</h1>
            <button onClick={() => dispatch(PREV_POKEMON())}>PREVIOUS</button>
            <button onClick={() => dispatch(GET_POKEMONS())}>CLICK HERE</button>
            <button onClick={() => dispatch(NEXT_POKEMON())}>NEXT ONE</button>  
            {
                pokemones.map(element => (
                    <li key={element.name}>{element.name}</li>
                ))
            }
        </div>
    )
}

export default Pokemones
