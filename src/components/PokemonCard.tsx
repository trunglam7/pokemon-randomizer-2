import axios from 'axios'
import { useEffect, useState } from 'react'

type PokeProp = {
  pokeUrl: number
}

const PokemonCard = ({pokeUrl} : PokeProp) => {

  const url: string = `https://pokeapi.co/api/v2/pokemon/${pokeUrl}`;

  const [name, setName] = useState<string>('');

  useEffect(() => {
    axios.get(url).then((res) => {
      setName(res.data.name)
    })
  }, [])

  return (
    <div className='pokemon-card-container'>
      {name.toUpperCase()}
    </div>
  )
}

export default PokemonCard