function ErrorPage( { error }) {
    return (
        <div className="home">
            <h2>{error} Well, looks like we'll have to beat the devil out of our servers.</h2>
            <p>Or you can try another painting.</p>
        </div>
    )
}

export default ErrorPage