import ItemListContainer from "./ItemListContainer/ItemListContainer"
import { useState, useEffect } from "react"
import { getStock } from "./ItemList/ItemList.js"
import { ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer"
import { ItemDetail } from "./ItemDetail/ItemDetail"



const Main = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getStock
        .then((res) => res.map((item, i) =>( 
            <ItemListContainer url={item.url} name={item.name} id={item.id} key={i}/>
        )))
        .then((data) => setItems(data))
        .catch((err) => console.log(err))
    }, [])
        console.log(items);
    return (
        <main className="main container">
            <div className="flex row col-12">
                {
                    items
                }
            </div>

            <ItemDetailContainer/>
            <ItemDetail/>
        </main>
    )
}

export default Main
