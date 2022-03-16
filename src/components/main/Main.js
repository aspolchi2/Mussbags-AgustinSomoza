import Bags from "./bolsos/Bolsos"
import bolsoAmor from '../main/bolsos/testing.webp'
import blacki from '../main/bolsos/blacki.jpg';
import beige from '../main/bolsos/beige.jpg'
import gif from '../main/bolsos/testing.webp'

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
        <div className="flex">
           {
                BolsosList.map((prod) => (
                    <Bags src={prod.url} name={prod.name}/>
                ))
           } 
           </div>

        </main>
    )
}

export default Main