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
    const [isSearching, setIsSearching] = useState(false);
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    function fetchFilteredProperties() {
        const { search, type, rooms, beds } = filterData;
        let filteredUrl = `${api_url}/properties?limit=8&page=1&rooms=${rooms}&beds=${beds}`;
        if (search) filteredUrl += `&search=${search}`;
        if (type) filteredUrl += `&type=${type}`;
        axios.get(filteredUrl)
            .then(res => setFilteredProperties(res.data.results))
            .catch(err => console.error(err))

    }

    function updateLikes(id) {
        axios.patch(`${api_url}/properties/${id}`)
            .then(res => {
                fetchProperties()
                fetchFilteredProperties()
            })
            .catch(err => console.error(err))
    }

    function fetchProperties() {
        axios.get(`${api_url}/properties?limit=8&page=1`) // Gestire limit e page in modo dinamico
            .then(res => {
                setProperties(res.data.results)
                setTotalPages(res.data.totalPages)
            })
            .catch(err => console.error(err))
    }
    // Funzione che viene scatenata al click del pulsante mostra altri immobili nella homepage
    function incrementCurrentPage() {
        setCurrentPage(prev => prev + 1);

        const newPage = currentPage + 1;

        axios.get(`${api_url}/properties?limit=8&page=${newPage}`) // Gestire limit e page in modo dinamico
            .then(res => {
                setProperties(prev => [...prev, ...res.data.results])
            })
            .catch(err => console.error(err))
    }

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
        types,
        isSearching,
        setIsSearching,
        fetchProperties,
        properties,
        setProperties,
        fetchFilteredProperties,
        filteredProperties,
        updateLikes,
        incrementCurrentPage,
        currentPage,
        setCurrentPage,
        totalPages
    }


    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalProvider }