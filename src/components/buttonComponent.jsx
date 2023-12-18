const ButtonComponent = (props) => {
    const handleClick = () => {
        alert(`Hai cliccato il bottone ${props.label}`)
    }
    return <button onClick={handleClick}>{props.label}</button>
}

export default ButtonComponent