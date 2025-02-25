
const NavBar = () => {
    return (
        <nav >
            <div className="container-fluid">
                <div className="row">

                    <div className="col-6 col-sm-3 d-flex align-items-center my-3">

                        <a href="#" className="d-flex align-items-center logo-brand">
                            <img className="logo" src="../public/Logo_prova.png" alt="Logo" />
                            <h1 className="logo-brand">BoolB&B</h1>
                        </a>
                    </div>


                    <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center order-2 order-sm-1 my-3">
                        <button className="row searchbar">
                            <div className="col-2"></div>
                            <div className="col-8 text-center">Cerca</div>
                            <div className="col-2"><i class="fa-solid fa-sliders"></i></div>
                        </button>
                    </div>


                    <div className="col-6 col-sm-3 d-flex justify-content-end align-items-center order-1 order-sm-3 my-3">
                        <button className="button">Bottone</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar