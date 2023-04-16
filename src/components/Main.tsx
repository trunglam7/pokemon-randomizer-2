import { useState } from 'react'
import PokemonRoster from './PokemonRoster'

import './Main.css'

const Main = () => {

    const [randomToggle, setRandomToggle] = useState<boolean>(true);

    return (
        <main className='main-container'>
            <PokemonRoster randomToggle={randomToggle}/>
            <button className='randomize-btn' onClick={() => randomToggleHandler()}>Randomize</button>
        </main>
    )

    function randomToggleHandler() : void {
        setRandomToggle(!randomToggle);
    }
}

export default Main