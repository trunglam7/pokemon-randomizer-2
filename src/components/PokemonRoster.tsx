import {useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import axios from 'axios'

import './PokemonRoster.css'

type rosterProp = {
    randomToggle: boolean;
}

const PokemonRoster = ({randomToggle} : rosterProp) => {

    const [roster, setRoster] = useState<number[]>([]);
    const url: string = 'https://pokeapi.co/api/v2/pokedex/1';

    useEffect(() => {
        axios.get(url).then((res) => {
            const numPokemon: number = res.data.pokemon_entries.length;
            const randomRoster: number[] = [...Array(numPokemon).keys()].sort(() => 0.5 - Math.random()).slice(0, 6)
            setRoster(randomRoster);
        })
    }, [randomToggle])

    return (
        <div className='pokemon-roster-container'>
            {roster.map((x: number) => <PokemonCard key={x + 1} pokeUrl={x + 1}/>)}
        </div>
    )
}

export default PokemonRoster