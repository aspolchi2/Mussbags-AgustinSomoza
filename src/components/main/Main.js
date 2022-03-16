import Bags from "./bolsos/Bolsos"
import bolsoAmor from '../main/bolsos/testing.webp'
import {blacki} from '../main/bolsos/testing.webp'
import {beige} from '../main/bolsos/testing.webp'
import {gif} from '../main/bolsos/testing.webp'

const BolsosList = [{
    name: 'blacky',
    id: 1,
    url: blacki
},
{
    name: 'beige',
    id: 2,
    url: beige
},
{
    name: 'gif',
    id: 2,
    url: gif
}]


const Main = () => {
    return (
        <main className="main">
           {
                BolsosList.map((prod) => (
                    <Bags src={prod.url} name={prod.name}/>
                ))
           } 
            

        </main>
    )
}

export default Main