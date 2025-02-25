import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const api_url = import.meta.env.VITE_API_URL
    const initialFilterData = {
        search: '',
        type: '',
        rooms: 1,
        beds: 1
    }
    const [filterData, setFilterData] = useState(initialFilterData);
    const [types, setTypes] = useState([]);

    const resetModalFilterData = (e) => {
        e.preventDefault();
        setFilterData(initialFilterData);
    }
    // Funzioni che vengono eseguite al mount dell'app
    useEffect(() => {
        axios.get(`${api_url}/types`)
            .then(res => setTypes(res.data))
            .catch(err => console.err(err))
    }, [])

    const value = {
        filterData,
        setFilterData,
        resetModalFilterData,
        types
    }


    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalProvider }