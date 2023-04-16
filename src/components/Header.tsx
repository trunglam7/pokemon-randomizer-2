import PokeLogo from '../assets/pokemon-logo.png'

import './Header.css'

type HeaderProp = {
  pokedexHandler: any
};

const Header = ({pokedexHandler}: HeaderProp) => {
  return (
    <header>
        <img className='header-logo' src={PokeLogo} alt='pokemon logo' />
        <div className='pokedex-container'>
          <button onClick={() => pokedexHandler(1)}>National</button>
          <button onClick={() => pokedexHandler(2)}>Kanto</button>
          <button onClick={() => pokedexHandler(3)}>Johto</button>
          <button onClick={() => pokedexHandler(4)}>Hoenn</button>
          <button onClick={() => pokedexHandler(5)}>Sinnoh</button>
          <button onClick={() => pokedexHandler(8)}>Unova</button>
        </div>
    </header>
  )
}

export default Header