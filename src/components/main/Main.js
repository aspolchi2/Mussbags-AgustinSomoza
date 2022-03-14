import Bags from "./bolsos/Bolsos"
import bolsoAmor from '../main/bolsos/bolso_amor.jpg'



const Main = () => {
    return (
        <main className="main">
            <Bags src={bolsoAmor} text ='Bolso Amor'/>
        </main>
    )
}

export default Main