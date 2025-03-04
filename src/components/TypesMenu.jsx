import { useGlobalContext } from "../context/GlobalContext"


const TypesMenu = ({ text, path, onClick, id }) => {
    const { filterData } = useGlobalContext();
    return (

        <button className={`btn-type ${filterData.type === id ? 'active' : ''}`} onClick={onClick}>
            <img src={`http://localhost:3000${path}`} alt={text} className="type-logo" />
            <h5>{text}</h5>
        </button>


    )
}

export default TypesMenu