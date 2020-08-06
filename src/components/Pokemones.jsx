import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { GET_POKEMONS } from "../redux/pokeDucks";


const Pokemones = () => {
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemons.array) 

    return (
        <div>
            <h1>Lista de pokemons</h1>
            <button onClick={() => dispatch(GET_POKEMONS())}>Click here</button>

            {
                pokemones.map(item => (
                    <li key={item.name}>{item.name}</li>
                ))
            }
        </div>
    )
}

export default Pokemones
