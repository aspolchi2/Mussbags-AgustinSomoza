import { useState } from "react"

const ItemCount = ({stock, initial, OnAdd}) => {
    //creamos hook 'useState'
    const [count, setCount] = useState(initial)
    const Counter = (value) => {
        document.querySelector('.spanCount').classList.remove('wrong')
        //verificamos el valor de setCount 
        if (value === 'add') {
            setCount(count + 1)
            if (count >= stock) {
                //agrega una clase a 'spanCount' cuando 'count' sea igual o mayor al stock que no funciona por que me selecciona el primer div con 'spanCount'
                document.querySelector('.spanCount').classList.add('wrong')
                setTimeout(function(){
                    document.querySelector('.spanCount').classList.remove('wrong')
                }, 1000)
                //Vuelve el valor de 'count' al maximo de stock
                setCount(stock)
            }
        } else {
            setCount(count - 1)
            if (count <= initial) {
                setCount(initial)
            }
            
        }
    


    }
    const AddToCart = ()=>{
       OnAdd(count)
    }
   
    return (
        <div className="addButton">
            <button className='counter' onClick={() => Counter('add')}>+</button>
            <span className="spanCount">{count}</span>
            <button className='counter' onClick={() => Counter()}>-</button>
            <button className="counter" onClick={() => AddToCart()}>Buy</button>
        </div>
    )

}
export default ItemCount