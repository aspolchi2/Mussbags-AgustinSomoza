import { useState, useEffect } from 'react'

import React from 'react'
import { Card } from 'react-bootstrap'
import { getStock } from '../ItemList/ItemList'
import Main from '../Main'



export const ItemDetailContainer = ({ id }) => {
    const [first, setfirst] = useState(id)
    const [second, setSecond] = useState([])
    useEffect(() => {

        getStock
            .then(res => { res.find((r)=>r.id === 1)})
            .then(data => console.log(data))

    }, [])



    return (
        <div className='bsCard'><Card className="bg-dark text-white">
            <Card.Img src='' alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>''</Card.Title>
                <Card.Text>
                    ''
                </Card.Text>
                <Card.Text>''</Card.Text>
            </Card.ImgOverlay>
        </Card></div>
    )
}
