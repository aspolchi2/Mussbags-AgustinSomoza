import { useState } from "react"

const ItemCount = (prop) => {
    const [count, setCount] = useState(prop.initial)
    const counter = (value) => {
        if(value === 'add'){
            setCount(count + 1)
            if(count >= prop.stock){
                alert(`Nuestro stock es de ${prop.stock}`)
                setCount(prop.stock)
            }
        } else{
            setCount(count - 1)
            if(count <= prop.initial){
                alert(`El minimo es de ${prop.initial}`)
                setCount(prop.initial)
            }
        }


    }
    return (
        <div className="addButton">
            <button className='counter' onClick={() => counter('add')}>+</button>
            <span className="spanCount">{count}</span>
            <button className='counter' onClick={() => counter()}>-</button>
        </div>
    )

}
export default ItemCount