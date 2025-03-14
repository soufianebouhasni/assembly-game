import EliminationButton from './EliminationButton'

const proLangs = [
    {name: "javascript", id: 2, colorBg: "#F7DF1E", colorF: "#000000"}, // JavaScript (Official)
    {name: "css", id: 3, colorBg: "#1572B6", colorF: "#FFFFFF"},        // CSS (Official)
    {name: "html", id: 4, colorBg: "#E34F26", colorF: "#FFFFFF"},       // HTML (Official)
    {name: "python", id: 5, colorBg: "#3776AB", colorF: "#FFD43B"},     // Python (Official)
    {name: "java", id: 6, colorBg: "#007396", colorF: "#FFFFFF"},       // Java (Official)
    {name: "c++", id: 7, colorBg: "#00599C", colorF: "#FFFFFF"},        // C++ (Official)
    {name: "c#", id: 8, colorBg: "#68217A", colorF: "#FFFFFF"},         // C# (Official)
    {name: "go", id: 9, colorBg: "#00ADD8", colorF: "#FFFFFF"},         // Go (Official)
    {name: "typescript", id: 10, colorBg: "#3178C6", colorF: "#FFFFFF"}, // TypeScript (Official)
    {name: "rust", id: 11, colorBg: "#000000", colorF: "#FFFFFF"},      // Rust (Official)
];

export default function Eliminations({word, wrongGuesses}) {
    const selectedLang = [...proLangs.filter((_,index)=> index < word.length), {name: "assembly", id: 1, colorBg: "#6E4C13", colorF: "#FFFFFF"}, ]

    return (
        <div className="eliminations-btn-container">
            {
                selectedLang.map((lang, index) => (
                    <EliminationButton 
                        key={lang.id} 
                        color={{colorBg:lang.colorBg, colorF:lang.colorF}}
                        disabled={wrongGuesses > index}
                    >
                        {lang.name}
                    </EliminationButton>
                ))
            }
        </div>
    )
}