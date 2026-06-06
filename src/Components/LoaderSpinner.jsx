const LoaderSpinner = () => {
    return (
        <div className="d-flex justify-content-center spinner-circle">
            <div className="spinner-border" role="status" style={{width: "4rem", height: "4rem", role:"status",}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};
export default LoaderSpinner;
