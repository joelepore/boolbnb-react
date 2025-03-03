import { useGlobalContext } from "../context/GlobalContext"


const TypesMenu = ({ text, path, onClick, id }) => {
    const { filterData } = useGlobalContext();
    return (

        <button className={`btn-type mx-4 mx-md-5 ${filterData.type === id ? 'active' : ''}`} onClick={onClick}>
            <img src={`http://localhost:3000${path}`} alt={text} className="type-logo" />
            <h5>{text}</h5>
        </button>


    )
}

export default TypesMenu