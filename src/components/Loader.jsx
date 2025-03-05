const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="spinner-border text-primary" role="status">
                <span className="">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
