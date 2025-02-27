

const Footer = () => {
    return (
        <footer className="footer-custom footer mt-5 py-3 border-top text-center text-light">
            <div className="container">
                <p className="mb-3 text-secondary">Domande? <br /> NON contattarci al:</p>
                <a href="/" className="text-primary text-decoration-none">123-456-789</a>

                <div className="footer-links d-flex justify-content-center flex-wrap pt-3 mt-2">
                    <a href="/" className="text-secondary mx-3">Privacy</a>
                    <a href="/" className="text-secondary mx-3">Termini di servizio</a>
                    <a href="/" className="text-secondary mx-3">Centro assistenza</a>
                    <a href="/" className="text-secondary mx-3">Account</a>
                </div>

                <div className="social-icons mt-4">
                    <a href="/"><i className="fab fa-facebook-f mx-2 text-primary"></i></a>
                    <a href="/"><i className="fab fa-twitter mx-2 text-primary"></i></a>
                    <a href="/"><i className="fab fa-instagram mx-2 text-primary"></i></a>
                </div>

                <p className="mt-3 text-secondary"> ® 2024 BoolBnB</p>
            </div>
        </footer>
    );
};


export default Footer