import Bags from "./bolsos/Bolsos"
import bolsoAmor from '../main/bolsos/testing.webp'
import Show from "./BolsosList/BolsosList"
import List from "./BolsosList/BolsosList"


const Main = () => {
    return (
        <main className="main">
            <Bags src={bolsoAmor} text='Bolso Amor' />
            <List/>
        </main>
    )
}

export default Main