import React, { useRef } from 'react'

import { useState } from "react"

const ItemCount = ({ stock, initial, OnAdd }) => {
    //creamos hook 'useState'
    const [count, setCount] = useState(initial)
    //useRef es como el $().this en jquery se usa para seleccionar solamente el elemento que se modifica
    const MaxStock = useRef()

    const More = () => {
        setCount(count + 1)
        if (count >= stock) {
            //agrega una clase a 'spanCount' cuando 'count' sea igual o mayor al stock que no funciona por que me selecciona el primer div con 'spanCount'
            MaxStock.current.classList.add('wrong')
            setTimeout(function () {
                MaxStock.current.classList.remove('wrong')
            }, 1000)
            //Vuelve el valor de 'count' al maximo de stock
            setCount(stock)
        }
    }

    const Less = () => {
        setCount(count - 1)
        //si el valor de 'count' es menor o igual al valor de 'initial' setea 'count' al valor de 'initial' 
        if (count <= initial) {
            setCount(initial)
        }
    }
    const AddToCart = () => {
    if (stock > 0 && count > 0){
            const StockLeft = stock - count
            OnAdd(count, StockLeft)

        }
    }



    return (
        <div className="ItemCount">
            <button className='counter' onClick={() => More()}>+</button>
            <span ref={MaxStock} className="spanCount">{count}</span>
            <button className='counter' onClick={() => Less()}>-</button>
            <button className="counter" onClick={() => AddToCart()}>Buy</button>
        </div>
    )

}
export default ItemCount