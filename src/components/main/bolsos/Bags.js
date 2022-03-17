import React, { useState, useEffect } from "react"
import AddButton from "../addButton/AddButton";

const ItemStock = {
    stock: 5,
    initial: 1,
}
const OnAdd = (HowMany) => {
    alert(`compraste ${HowMany}`)
}

//le pasamos dos parametros 
const Bags = ({ src, name }) => {
    return (
        <article className='bags col-12 col-sm-6 col-md-3 col-lg-2' >
            <main className='bags__img'>
                <img className='img-fluid' controls src={src} alt='Imagen de un bolso' ></img>
            </main>
            <footer className='bags__footer'>
                <p className='bags__footer__p'>{name}</p>
                <AddButton stock={ItemStock.stock} initial={ItemStock.initial} OnAdd={OnAdd} />
            </footer>
        </article>

    )
}
export default Bags
