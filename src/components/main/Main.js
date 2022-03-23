import ItemListContainer from "./ItemListContainer/ItemListContainer"
import { useState, useEffect } from "react"
import { getStock } from "./ItemList/ItemList.js"



const Main = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getStock
        .then((res) => res.map((item) =>( 
            <ItemListContainer src={item.url} name={item.name} key={item.id} />
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


        </main>
    )
}

export default Main
