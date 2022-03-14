import Bolsoscss from './Bolsoscss.css'


const Bags = (prop) => {
    return (
        <article className='bags col-12 col-sm-6 col-md-4 col-lg-3'>
            <main className='bags__img'>
                <img className='img-fluid' src={prop.src} alt='Imagen de un bolso' ></img>
            </main>
            <footer className='bags__footer'>
                <p className='bags__footer__p'>{prop.text}</p>
            </footer>
        </article>
    )
}
export default Bags