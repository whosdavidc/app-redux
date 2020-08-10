import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { GET_POKEMONS, NEXT_POKEMON, PREV_POKEMON } from "../redux/pokeDucks";


const Pokemones = () => {
    const dispatch = useDispatch()


    const pokemons = useSelector(store => store.pokemons.results)  //useSelector = A hook to acess the redux´s state
    const next = useSelector(store => store.pokemons.next)
    const previous = useSelector(store => store.pokemons.previous)

    return (
        <div className="row">
            <div className="col-md-6">
                <h1>Lista de pokemons</h1>
                
                <br/>
                <div className="d-flex justify-content-between">
                    {
                        pokemons.length === 0 &&
                        <button onClick={() => dispatch(GET_POKEMONS())} className="btn btn-dark">CLICK HERE</button>
                    }
                    
                    {
                        next ? 
                        <button onClick={() => dispatch(NEXT_POKEMON())} className="btn btn-dark mr-2">NEXT ONE</button>
                        : null                  
                    }

                    {
                        previous?
                        <button onClick={() => dispatch(PREV_POKEMON())} className="btn btn-dark">PREVIOUS</button>
                        : null
                    }
                    
                    
                </div>
                <ul className="list-group mt-3">
                        {
                            pokemons.map(element => (
                                <li key={element.name} className="list-group-item text-uppercase">
                                    {element.name}
                                    <button className="btn btn-dark btn-sm float-right">INFO</button>
                                </li>
                            ))
                        }
                </ul>
            </div>
            <div className="col-md-6">
                detalle de pokemon
            </div>
        </div>
    )
}

export default Pokemones
