export default function EliminationButton({color, id, children, disabled}) {
    const btnColorStyle = {
        backgroundColor: disabled ? '#808080' : color.colorBg,
        color: disabled ? '#ffffff' : color.colorF,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer'
    }
    
    return (
        <button 
            style={btnColorStyle}
            disabled={disabled}
        >
            {children}
        </button>
    )
}