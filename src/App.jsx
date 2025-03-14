// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Eliminations from './components/Eliminations'
import GuessedLettersBoard from './components/GuessedLettersBoard'
import KeyBoard from './components/KeyBoard'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Header/>
      <Eliminations/>
      <GuessedLettersBoard/>
      <KeyBoard/>
    </main>
  )
}

export default App
