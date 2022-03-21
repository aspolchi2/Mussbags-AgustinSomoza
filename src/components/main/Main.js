import ItemListContainer from "./ItemListContainer/ItemListContainer"
import ItemList from './ItemList/ItemList.js'
import { useState, useEffect } from "react"

const GetStock = () => {
    return new Promise((resolve, reject) => {
        if (ItemList.length === 0) {
            reject(new Error('No hay datos'))
        }
        setTimeout(() => {
            resolve(ItemList);
        }, 2000)
    })
}


const Main = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await GetStock();
                setItems(res.map((item) => (
                    <ItemListContainer src={item.url} name={item.name} key={item.id} />
                )));
            } catch (err) {
                console.error(err.message);
            }
        }
        fetchData();
    }, []);
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
