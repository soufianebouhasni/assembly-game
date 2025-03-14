import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Eliminations from './components/Eliminations'
import GuessedLettersBoard from './components/GuessedLettersBoard'
import KeyBoard from './components/KeyBoard'
import Notice from './components/Notice'

function App() {
  const [notice, setNotice] = useState({
    status: "playing",
    message: "Farewell HTML & CSS 🫡 "
  })

  return (
    <main>
      <Header/>
      <Notice notice={notice}/>
      <Eliminations/>
      <GuessedLettersBoard/>
      <KeyBoard/>
    </main>
  )
}

export default App
