
const NavBar = () => {
    return (
        <nav className="bg-secondary">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-6 col-sm-3 d-flex align-items-center">
                        <a className="navbar-brand" href="#">Logo</a>
                    </div>


                    <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center order-2 order-sm-1">
                        <button className="row w-100">
                            <div className="col-2"></div>
                            <div className="col-auto text-center">Cerca</div>
                            <div className="col-2">o</div>
                        </button>
                    </div>


                    <div className="col-6 col-sm-3 d-flex justify-content-end align-items-center order-1 order-sm-3">
                        <button>Bottone</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar