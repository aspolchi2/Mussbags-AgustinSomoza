import ItemListContainer from "./bolsos/ItemListContainer"
import Beige from './bolsos/beige.jpg'
const prod = {
    url: Beige,
    name: 'Beige',
    id: 1
}



const Main = () => {
    return (
        <main className="main">
            <div className="flex">


                <ItemListContainer src={prod.url} name={prod.name} key={prod.id} />

            </div>

        </main>
    )
}

export default Main