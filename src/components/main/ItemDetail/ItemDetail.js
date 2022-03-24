import React, { useEffect, useState } from 'react'
import { getStock } from '../ItemList/ItemList';
import { Card } from 'react-bootstrap';

export const Clicked =(id)=>{
    console.log(id);
    <ItemDetail id={id}/>
}

export const ItemDetail = ({id}) => {
    const [item, setItem] = useState([])  
    useEffect(() => {
        getStock
        .then((res) => res.find((r)=>r.id === Number(id)))
        .then((data) => setItem(data))
        .catch((err) => console.log(err))
        console.log(item);
    }, [])
  return (
    <div ><h1>{item}</h1></div>

  )
}
