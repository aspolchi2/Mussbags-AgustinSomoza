
import React from 'react'
import { Card } from 'react-bootstrap'



export const ItemDetailContainer = ({ id, name, price, desc, url }) => {
   
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
