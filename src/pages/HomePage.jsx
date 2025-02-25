import Button from "../components/Button"
import Card from "../components/Card"

const HomePage = () => {
    return (
        //<div><Button text={"testo"} onClick={""} /></div>
        <div className="container">

            <h1 className="text-center py-3">Immobili in evidenza</h1>

            <div className="row row-cols-1 row-cols-xxl-4 row-cols-xl-3 row-cols-md-2 row-cols-sm-1 g-3 ">
                <div className="col">
                    <Card name={"Appartamento Roma"} indirizzo={"Via Roma"} details={true} stanze={2} bagni={3} metri={2000} stelline={4.2} cuori={350} />
                </div>
            </div>
        </div>
    )
}

export default HomePage