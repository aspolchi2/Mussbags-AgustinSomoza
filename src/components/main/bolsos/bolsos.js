


const Bolsos = (prop) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={prop.src} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{prop.text}</p>
            </div>
        </div>
    )
}
export default Bolsos