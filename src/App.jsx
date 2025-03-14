import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Eliminations from './components/Eliminations'
import GuessedLettersBoard from './components/GuessedLettersBoard'
import KeyBoard from './components/KeyBoard'
import Notice from './components/Notice'

function App() {
  const word = "soufiane"
  const [notice, setNotice] = useState({
    status: "playing",
    message: "Farewell HTML & CSS 🫡 "
  })
  const [guesses, setGuesses] = useState([])
  
  const wrongGuesses = guesses.filter(g => g.result === "wrong").length
  const isGameOver = notice.status === "won" || notice.status === "lose"

  const handleGuess = (guess) => {
    if (isGameOver || guesses.length >= word.length) {
      return
    }

    setGuesses(prev => [...prev, guess])
    
    const newGuesses = [...guesses, guess]
    if (newGuesses.length === word.length) {
      if (newGuesses.every((g) => g.result === "correct")) {
        setNotice({
          status: "won",
          message: "You win! The word was " + word
        })
      } else {
        setNotice({
          status: "lose",
          message: "You lose! The word was " + word
        })
      }
    }
  }

  return (
    <main>
      <Header/>
      <Notice notice={notice}/>
      <Eliminations word={word} wrongGuesses={wrongGuesses} />
      <GuessedLettersBoard word={word} guesses={guesses}/>
      <KeyBoard 
        word={word} 
        handleGuess={handleGuess} 
        isGameOver={isGameOver}
        guesses={guesses}
      />
    </main>
  )
}

export default App
