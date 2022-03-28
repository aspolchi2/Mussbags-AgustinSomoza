import Beige from './beige.jpg'
import Blackie from './blackie.jpg'
import Gif from './gif.webp'



const ItemList = [{
    id: "1",
    url: Beige,
    name: 'Beige',
    price: 4699,
    desc: 'es un bolso'

},
{
    id: "2",
    url: Gif,
    name: 'Gif',
    price: 4599,
    desc: 'es un bolso'

},
{
    id: "3",
    url: Blackie,
    name: 'Blackie',
    price: 4399,
    desc: 'es un bolso'

}]

export const getStock =  new Promise((resolve, reject) => {
        if (ItemList.length === 0) {
            reject(new Error('No hay datos'))
        }
        setTimeout(() => {
            resolve(ItemList);
        }, 2000)
    })




export default ItemList