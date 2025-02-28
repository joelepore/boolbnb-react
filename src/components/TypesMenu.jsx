

const TypesMenu = ({ text, path, onClick }) => {
    return (

        <button className="btn-type mx-4 mx-md-5">
            <img src={`http://localhost:3000${path}`} alt={text} onClick={onClick} className="type-logo" />
            <h5>{text}</h5>
        </button>


    )
}

export default TypesMenu