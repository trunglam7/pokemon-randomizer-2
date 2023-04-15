import PokeLogo from '../assets/pokemon-logo.png'

import './Header.css'

const Header = () => {
  return (
    <header>
        <img className='header-logo' src={PokeLogo} alt='pokemon logo' />
    </header>
  )
}

export default Header