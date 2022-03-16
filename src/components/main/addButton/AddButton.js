import { useState } from "react"

const ItemCount = (prop) => {
    //creamos hook 'useState'
    const [count, setCount] = useState(prop.initial)

    const counter = (value) => {
        document.querySelector('.spanCount').classList.remove('wrong')
        //verificamos el valor de setCount 
        if (value === 'add') {
            
            setCount(count + 1)
            if (count >= prop.stock) {
                //agrega una clase a 'spanCount' cuando 'count' sea igual o mayor al stock
                document.querySelector('.spanCount').classList.add('wrong')
                //Vuelve el valor de 'count' al maximo de stock
                setCount(prop.stock)
            }
        } else {
            setCount(count - 1)
            if (count <= prop.initial) {
                setCount(prop.initial)
            }
        }



    }
    const onAdd = () => {
        alert(`agregaste ${count} al carrito`)
    }
    return (
        <div className="addButton">
            <button className='counter' onClick={() => counter('add')}>+</button>
            <span className="spanCount">{count}</span>
            <button className='counter' onClick={() => counter()}>-</button>
            <button className="counter" onClick={() => onAdd()}>Buy</button>
        </div>
    )

}
export default ItemCount