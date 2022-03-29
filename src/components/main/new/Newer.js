import React, { useEffect, useState } from 'react'

export const Neweeer = () => {
    const [isMobile, setIsmobile] = useState(false)

    const check = () => {
        if (window.innerWidth < 768) {
            setIsmobile(true)
        } else {
            setIsmobile(false)
        }

    }

    useEffect(() => {
        check()
        window.addEventListener('resize', check)

        return () => {
            window.removeEventListener('resize', check)
        }
    }, [])

    return (
        <div>
        { isMobile ? <h1>movile</h1> : <h1>desktop</h1> }
        </div>
    ) 
} 

export default Neweeer  
