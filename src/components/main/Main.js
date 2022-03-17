import Bags from "./bolsos/Bags"
import Blacki from '../main/bolsos/blacki.jpg';
import Beige from '../main/bolsos/beige.jpg'
import Gif from '../main/bolsos/testing.webp'

const BagsList = [{
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
    id: 3,
    url: Gif
}]


const Main = () => {
    return (
        <main className="main">
            <div className="flex">
                {
                    BagsList.map(prod =>
                        <Bags src={prod.url} name={prod.name} key={prod.id}/>
                    )
                }
            </div>

        </main>
    )
}

export default Main