import React, { useState, useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import Item from "../Item/Item"
import ItemList, { getStock } from "../ItemList/ItemList"

const ItemStock = {
    stock: 5,
    initial: 0,
}
const OnAdd = (HowMany, StockLeft) => {
    alert(`Agregaste ${HowMany} quedan ${StockLeft}`)
}



const ItemListContainer = ({ url, id }) => {
    const [GrabId, setGrabId] = useState(id)

    useEffect(() => {
    getStock
    .then(res => res.map(r => r.id ))
    .then(data => setGrabId(data))
    .catch(err => console.log(err))
},[])
    
    return (
        <article className='bags col-6 col-sm-4 col-md-2 col-lg-2' >
            <main className='bags__img'>
                <img className='img-fluid' controls src={url} alt='Imagen de un bolso' ></img>
                <Item GrabId= {id}/>
            </main>
            <footer className='bags__footer'>
                <ItemCount stock={ItemStock.stock} initial={ItemStock.initial} OnAdd={OnAdd} />
            </footer>
        </article>

    )
}


export default ItemListContainer
