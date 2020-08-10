import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { GET_POKEMONS, NEXT_POKEMON, PREV_POKEMON } from "../redux/pokeDucks";


const Pokemones = () => {
    const dispatch = useDispatch()


    const pokemons = useSelector(store => store.pokemons.results)  //useSelector = A hook to acess the redux´s state
    const next = useSelector(store => store.pokemons.next)
    const previous = useSelector(store => store.pokemons.previous)

    return (
        <div>
            <h1>Lista de pokemons</h1>
            
            <br/>

            {
                pokemons.length === 0 &&
                <button onClick={() => dispatch(GET_POKEMONS())}>CLICK HERE</button>
            }
            
            {
                next ? 
                <button onClick={() => dispatch(NEXT_POKEMON())}>NEXT ONE</button>
                : null                  
            }

            {
                previous?
                <button onClick={() => dispatch(PREV_POKEMON())}>PREVIOUS</button>
                : null
            }
            {
                pokemons.map(element => (
                    <li key={element.name}>{element.name}</li>
                ))
            }
        </div>
    )
}

export default Pokemones
