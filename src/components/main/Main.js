import ItemListContainer from "./ItemListContainer/ItemListContainer"
import { useState, useEffect } from "react"
import { getStock } from "./ItemList/ItemList.js"
import { Clicked, ItemDetail } from "./ItemDetail/ItemDetail"



const Main = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getStock
        .then((data) => setItems(data))
        .catch((err) => console.log(err))
    }, [])
        console.log(items);
    return (
        <main className="main container">
            <div className="flex row col-12">
                {
                    items.map((res, i) => 
                     <ItemListContainer url={res.url} name={res.name} id={res.id} key={i}/>)
                   
                }
            </div>
            <div className="flex row col-3">
                {
                   Clicked ?  <ItemDetail id={Clicked}/> : null
                }
           </div>
        </main>
    )
}

export default Main
