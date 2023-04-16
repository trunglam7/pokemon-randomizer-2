import {useContext, useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import axios from 'axios'

import './PokemonRoster.css'
import { PokedexContext } from '../App'

type rosterProp = {
    randomToggle: boolean;
}

const PokemonRoster = ({randomToggle} : rosterProp) => {

    const PokedexIndex = useContext(PokedexContext);
    const [roster, setRoster] = useState<number[]>([]);
    const url: string = `https://pokeapi.co/api/v2/pokedex/${PokedexIndex}`;

    useEffect(() => {
        axios.get(url).then((res) => {
            const pokemonEntries: number[] = res.data.pokemon_entries.map((x: any) => parseInt(x.pokemon_species.url.split('/').filter((element: string) => element).pop()));
            const randomRoster: number[] = [...pokemonEntries].sort(() => 0.5 - Math.random()).slice(0, 6)
            setRoster(randomRoster);
        })
    }, [randomToggle, url])

    return (
        <div className='pokemon-roster-container'>
            {roster.map((x: number) => <PokemonCard key={x + 1} pokeUrl={x + 1}/>)}
        </div>
    )
}

export default PokemonRoster