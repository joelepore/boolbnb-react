

const Button = ({ text, onClick }) => {
    return (
        <button className="button fit-content" onClick={onClick}>{text}</button>
    )
}

export default Button