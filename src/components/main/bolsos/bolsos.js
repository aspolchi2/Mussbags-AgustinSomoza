import React, {useState, useEffect} from "react"
import AddButton from "../addButton/AddButton";

const ItemStock = {
    stock: 5,
    initial: 1,
}


const Bags = ({src, name}) => {
 const [count, setCount] = useState(0)
 console.log('aqui seria el...');
 useEffect(()=> {
     console.log('App mounted');
     return () =>{
         console.log('will unmount');
     }
    
 }, [count])

     return (
        <article className='bags col-12 col-sm-6 col-md-4 col-lg-3' >
            <main className='bags__img'>
                <img className='img-fluid' controls src={src} alt='Imagen de un bolso' ></img>
            </main>
            <footer className='bags__footer'>
                <p className='bags__footer__p'>{name}</p>
              <AddButton stock={ItemStock.stock} initial={ItemStock.initial} />
            </footer>
        </article>
        
    )
}
export default Bags
