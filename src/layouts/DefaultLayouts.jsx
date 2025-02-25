import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const DefaultLayouts = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default DefaultLayouts