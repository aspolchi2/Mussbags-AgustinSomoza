import Bags from "./bolsos/Bolsos"
import Blacki from '../main/bolsos/blacki.jpg';
import Beige from '../main/bolsos/beige.jpg'
import Gif from '../main/bolsos/testing.webp'

const BolsosList = [{
    name: 'Blacky',
    id: 1,
    url: Blacki
},
{
    name: 'Beige',
    id: 2,
    url: Beige
},
{
    name: 'Gif',
    id: 2,
    url: Gif
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