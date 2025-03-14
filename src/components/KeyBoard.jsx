import { useState } from "react"

const keyboard = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
];

export default function KeyBoard({ word, handleGuess, isGameOver, guesses }) {

    function handerClick(e, guess) {
        if (isGameOver || guesses.length >= word.length) {
            return
        }

        guess = {
            ...guess,
            result: word.includes(guess.letter.toLowerCase()) ? "correct" : "wrong"
        }
        e.target.classList.add(`guess-${guess.result}`)
        handleGuess(guess)
    }

    const isLetterUsed = (letter) => {
        return guesses.some(g => g.letter === letter)
    }

    return (
        <div className="key-board-container">
            {keyboard.map((letter, index) => {
                const isUsed = isLetterUsed(letter)
                return (
                    <button
                        key={index}
                        onClick={(e) => handerClick(e, { letter, letterId: index })}
                        disabled={isGameOver || isUsed || guesses.length >= word.length}
                        className={isUsed ? "used-letter" : ""}
                    >
                        {letter}
                    </button>
                )
            })}
        </div>
    )
}