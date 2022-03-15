import React, {useState, useEffect} from "react"




const Bags = (prop) => {
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
                <img className='img-fluid' src={prop.src} alt='Imagen de un bolso' ></img>
            </main>
            <footer className='bags__footer'>
                <p className='bags__footer__p'>{prop.text}</p>
               <button onClick={()=> setCount(count + 1)}>
                   Clickeame
               </button>
               <p>me clickeaste {count} ultima vez a las {Date()} </p>
               
            </footer>
        </article>
        
    )
}
export default Bags
