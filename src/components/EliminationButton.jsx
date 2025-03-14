export default function EliminationButton({color,id,children}) {
    const btnColorStyle = {
        backgroundColor:color.colorBg,
        color:color.colorF
    }

    return (
        <button style={btnColorStyle} >{children}</button>
    )
}