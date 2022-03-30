import React, { useEffect, useState } from 'react'
import { getStock } from '../ItemList/ItemList';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';



export const ItemDetail = ({ id }) => {


  const [item, setItem] = useState([])

  useEffect(() => {
    getStock
      .then(res => res.find((r) => r.id === "2"))
      .then(data => setItem(data))
      .catch(err => console.log(err))
  }, [id])

  console.log(item);
  return (
    <ItemDetailContainer name={item.name} price={item.price} url={item.url} desc={item.desc} id={item.id} />

  )
}
