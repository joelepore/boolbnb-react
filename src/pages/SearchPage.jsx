import SearchModal from "../components/SearchModal"
import { useGlobalContext } from "../context/GlobalContext"

const SearchPage = () => {
    const { isSearching } = useGlobalContext();

    return (
        <>
            <h1>Risultati della ricerca</h1>
            {isSearching && <SearchModal />}
        </>
    )
}

export default SearchPage