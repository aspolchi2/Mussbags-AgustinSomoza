import ItemListContainer from "./ItemListContainer/ItemListContainer"
import ItemList from './ItemList/ItemList.js'


const Main = () => {
    return (
        <main className="main container">
            <div className="flex row col-12">
                {
                    ItemList.map((item) => (
                        <ItemListContainer src={item.url} name={item.name} key={item.id} />
                    ))
                }
            </div>


        </main>
    )
}

export default Main
