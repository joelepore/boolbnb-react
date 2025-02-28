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

    const initialProperty = {
        id: 0,
        title: '',
        rooms: 0,
        beds: 0,
        bathrooms: 0,
        sqm: 0,
        address: '',
        description: '',
        likes: 0,
        owner_fullname: '',
        type_id: 0,
        type: '',
        reviews: [],
        cover_img: '',
        images: [],
        average_vote: ''
    }

    const [filterData, setFilterData] = useState(initialFilterData);
    const [types, setTypes] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [property, setProperty] = useState(initialProperty); //var di stato per la gestione del render della pagina dettaglio


    function fetchProperty(id) {
        axios.get(`${api_url}/properties/${id}`)
            .then(res => setProperty(res.data))
            .catch(err => console.error(err))
    }

    //un funzione di fetch che raccolga le info dell'immobile in base all'id e le recensioni (Rotta show)

    function fetchFilteredProperties() {
        const { search, type, rooms, beds } = filterData;
        let filteredUrl = `${api_url}/properties?limit=8&page=1&rooms=${rooms}&beds=${beds}`;
        if (search) filteredUrl += `&search=${search}`;
        if (type) filteredUrl += `&type=${type}`;
        axios.get(filteredUrl)
            .then(res => {
                setFilteredProperties(res.data.results);
                setTotalPages(res.data.totalPages);
                setTotalResults(res.data.totalResults);
            })
            .catch(err => console.error(err))

    }

    function updateLikes(id) {
        axios.patch(`${api_url}/properties/${id}`)
            .then(res => {
                setProperties(properties.map(property => {
                    if (property.id === id) {
                        return { ...property, likes: property.likes + 1 }
                    } else {
                        return property;
                    }
                }))
                setFilteredProperties(filteredProperties.map(property => {
                    if (property.id === id) {
                        return { ...property, likes: property.likes + 1 }
                    } else {
                        return property;
                    }
                }))
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
                setProperties(prev => [...prev, ...res.data.results]);
            })
            .catch(err => console.error(err))
    }
    // Funzione che viene scatenata al click del pulsante mostra altri immobili nella searchpage
    function incrementCurrentPageSearchPage() {
        setCurrentPage(prev => prev + 1);

        const newPage = currentPage + 1;

        const { search, type, rooms, beds } = filterData;
        let filteredUrl = `${api_url}/properties?limit=8&page=${newPage}&rooms=${rooms}&beds=${beds}`;
        if (search) filteredUrl += `&search=${search}`;
        if (type) filteredUrl += `&type=${type}`;
        axios.get(filteredUrl)
            .then(res => {
                setFilteredProperties(prev => [...prev, ...res.data.results]);
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

    useEffect(() => {
        fetchFilteredProperties()
    }, [filterData.type])

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
        totalPages,
        incrementCurrentPageSearchPage,
        totalResults,
        initialFilterData,
        property,
        setProperty,
        fetchProperty,
    }


    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalProvider }