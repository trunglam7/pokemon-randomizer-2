import Header from "./components/Header"
import Main from "./components/Main"

import './App.css'
import { createContext, useState } from "react"

export const PokedexContext = createContext(1);

function App() {

  const [pokedex, setPokedex] = useState<number>(1);

  return (
    <div className="App">
      <PokedexContext.Provider value={pokedex}>
        <Header pokedexHandler={pokedexHandler}/>
        <Main />
      </PokedexContext.Provider>
    </div>
  )

  function pokedexHandler(pokedexIndex: number) : void {
    setPokedex(pokedexIndex);
  }
}

export default App
