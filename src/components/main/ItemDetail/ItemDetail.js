import React, { useEffect, useState } from 'react'

export const Clicked =(id)=>{
    console.log(id);
    <ItemDetail id={id}/>
}

export const ItemDetail = ({id}) => {
    const [first, setfirst] = useState(id)
    useEffect(() => {
      const g = setfirst(id)
    
      return () => {
       console.log(g);
      }
    }, [])
    
  return (
    <div><h1>{first}</h1></div>
  )
}
