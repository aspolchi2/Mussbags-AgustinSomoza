const bolsos = [
    {
        title: 'AMOR',
        src: './components/img/bolso_amor.img',
        text: 'Bolso amor'
    }
]


const ItemListContainer = () => {
    return (
       <div>
           <ul>{bolsos.map((props) => {
               <li>{props.text}</li>
           })}</ul>
       </div>

    )
}

export default ItemListContainer