

const keyboard = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
];

export default function KeyBoard() {
    return (
        <div className="key-board-container">
            {
                keyboard.map((letter, index) => (
                    <button key={index}>{letter}</button>
                ))
            }
        </div>
    )
}