export default function GuessedLettersBoard({ word, guesses }) {

     const goodGuess = guesses.filter((guess)=> guess.result === "correct").map((guess)=> guess.letter)
    return (
        <div className="guessed-letters-board">
            {
                word.split('').map((char, index)=> {
                    
                    return (
                        <div key={index} className="guessed-letter-box">
                            <span className={`guessed-letter-box-span${goodGuess.includes(char.toUpperCase()) ? "-correct" : ""}`}>{char.toUpperCase()}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}