import Button from "../components/Button"
import Card from "../components/Card"

const HomePage = () => {
    return (
        //<div><Button text={"testo"} onClick={""} /></div>
        <Card name={"Appartamento Roma"} indirizzo={"Via Roma"} details={true} stanze={2} bagni={3} metri={2000} />
    )
}

export default HomePage