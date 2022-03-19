import React, { useState, useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import Item from "../Item/Item"
import ItemList from "../ItemList/ItemList"

const ItemStock = {
    stock: 5,
    initial: 0,
}
const OnAdd = (HowMany, StockLeft) => {
    alert(`Agregaste ${HowMany} quedan ${StockLeft}`)
}



const ItemListContainer = ({ src }) => {
    return (
        <article className='bags col-6 col-sm-4 col-md-2 col-lg-2' >
            <main className='bags__img'>
                <img className='img-fluid' controls src={src} alt='Imagen de un bolso' ></img>
                {
                    ItemList.map((info) => (
                        <Item price={info.price} name={info.name} desc={info.desc} key={info.id}/>
                    ))
                }

            </main>
            <footer className='bags__footer'>
                <ItemCount stock={ItemStock.stock} initial={ItemStock.initial} OnAdd={OnAdd} />
            </footer>
        </article>

    )
}


export default ItemListContainer
