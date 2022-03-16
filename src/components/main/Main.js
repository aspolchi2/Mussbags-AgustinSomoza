import Bags from "./bolsos/Bolsos"
import bolsoAmor from '../main/bolsos/testing.webp'
import BolsosList from "./bolsos/BolsosList"


const Main = () => {
    return (
        <main className="main">
            <Bags src={bolsoAmor} text ='Bolso Amor'/>
        </main>
    )
}

export default Main