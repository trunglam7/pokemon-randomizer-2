import { useState } from 'react'
import PokemonRoster from './PokemonRoster'

const Main = () => {

    const [randomToggle, setRandomToggle] = useState<boolean>(true);

    return (
        <main className='main-container'>
            <PokemonRoster randomToggle={randomToggle}/>
            <button onClick={() => randomToggleHandler()}>Randomize</button>
        </main>
    )

    function randomToggleHandler() : void {
        setRandomToggle(!randomToggle);
    }
}

export default Main