import ItemListContainer from "./ItemListContainer/ItemListContainer"
import Beige from '../main/ItemListContainer/beige.jpg'
import ItemCount from "./ItemCount/ItemCount"
const prod = {
    url: Beige,
    name: 'Beige',
    id: 1
}
const ItemStock = {
    stock: 5,
    initial: 1,
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
