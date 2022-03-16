
//yo se que esto despues lo voy a tener que hacer con json
const BolsosList = [{
    name: 'bolso1',
    id: 1,
    url: './testing.webp'
}]






const Testingi = (name, id, url) => {
    return (
        <div>
            {name} {id} {url}
        </div>
    )
}

const List = () => {BolsosList.map((e) => {return(
    <Testingi name={e.name} id={e.id} url={e.url}/>)
})

}
export default List
