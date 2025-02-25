const TypeButton = ({ text, className, onClick }) => {
    return (
        <button className={`button button-type ${className}`} onClick={onClick}>{text}</button>
    )
}

export default TypeButton