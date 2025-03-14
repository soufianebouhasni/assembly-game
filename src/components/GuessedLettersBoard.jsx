 export default function GuessedLettersBoard() {
    return (
        <div className="guessed-letters-board">
            {
                Array.from({length: 8}).map((_, index) => (
                    <div key={index} className="guessed-letter-box">S</div>
                ))
            }
        </div>
    )
}