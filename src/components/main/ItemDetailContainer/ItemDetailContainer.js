import { useState, useEffect } from 'react'

import React from 'react'
import { Card } from 'react-bootstrap'
import { getStock } from '../ItemList/ItemList'
import Main from '../Main'



export const ItemDetailContainer = ({ id, name, price, desc, url }) => {
    const [first, setfirst] = useState(id)
    useEffect(() => {

        getStock
            .then(res => { res.find((r)=>r.id === 1 ) })
            .then(data => { setfirst(data) })
            .catch(err => console.log(err))

    }, [])



    return (
        <div className='bsCard'><Card className="bg-dark text-white">
            <Card.Img src={url} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>{price}</Card.Text>
            </Card.ImgOverlay>
        </Card></div>
    )
}
