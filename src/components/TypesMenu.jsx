

const TypesMenu = ({ text, path }) => {
    return (

        <button className="btn-type mx-4 mx-md-5">
            <img src={`http://localhost:3000${path}`} alt={text} className="type-logo" />
            <h5>{text}</h5>
        </button>


    )
}

export default TypesMenu