import React, {useState, useEffect} from "react"

const ItemStock = {
    stock: 5,
    initial: 1,
}

const ItemListContainer = ({name, src}) =>{

     return (
        <article className='bags col-12 col-sm-6 col-md-4 col-lg-3' >
            <main className='bags__img'>
                <img className='img-fluid' controls src={src} alt='Imagen de un bolso' ></img>
            </main>
            <footer className='bags__footer'>
                <p className='bags__footer__p'>{name}</p>
            </footer>
        </article>
        
    )
}
export default ItemListContainer
