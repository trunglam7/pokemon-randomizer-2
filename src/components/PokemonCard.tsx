import axios from 'axios'
import { useEffect, useState } from 'react'

import './PokemonCard.css'

type PokeType = {
  [key: string] : string;
}

type PokeProp = {
  pokeUrl: number
}

const pokemonType: PokeType = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
}

const PokemonCard = ({pokeUrl} : PokeProp) => {

  const url: string = `https://pokeapi.co/api/v2/pokemon/${pokeUrl}`;

  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [moves, setMoves] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(url).then((res) => {
      const moveSet: string[] = res.data.moves.map((x: any) => x.move.name).sort(() => 0.5 - Math.random()).slice(0, 4);
      const typeSet: string[] = res.data.types.map((x: any) => x.type.name);
      setName(res.data.name);
      setImage(res.data.sprites.front_default);
      setMoves(moveSet);
      setTypes(typeSet);
      setLoading(false);
    })
  }, [])

  if(loading) {
    return (
      <div className='loading-card'>Loading...</div>
    )
  }

  return (
    <div className='pokemon-card-container'>
      <p className='pokemon-name'>{name.toUpperCase()}</p>
      <img src={image} alt='pokemon image' />
      <div className='type-container' style={{gridTemplateColumns: `repeat(${types.length}, 1fr)`}}>
        {types.map((x: string) => <p className='pokemon-type' style={{backgroundColor: pokemonType[`${x}`]}} key={Math.random()}>{x}</p>)}
      </div>
      {moves.map((x: string) => <p className='pokemon-move' key={Math.random()}>{x}</p>)}
    </div>
  )
}

export default PokemonCard