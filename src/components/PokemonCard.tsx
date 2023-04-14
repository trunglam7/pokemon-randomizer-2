import axios from 'axios'
import { useEffect, useState } from 'react'

import './PokemonCard.css'

type PokeProp = {
  pokeUrl: number
}

const PokemonCard = ({pokeUrl} : PokeProp) => {

  const url: string = `https://pokeapi.co/api/v2/pokemon/${pokeUrl}`;

  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [moves, setMoves] = useState<string[]>([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      const moveSet: string[] = res.data.moves.map((x: any) => x.move.name).sort(() => 0.5 - Math.random()).slice(0, 4);
      setName(res.data.name);
      setImage(res.data.sprites.front_default);
      setMoves(moveSet);
    })
  }, [])

  return (
    <div className='pokemon-card-container'>
      <p className='pokemon-name'>{name.toUpperCase()}</p>
      <img src={image} alt='pokemon image' />
      {moves.map((x: string) => <p key={Math.random()}>{x}</p>)}
    </div>
  )
}

export default PokemonCard