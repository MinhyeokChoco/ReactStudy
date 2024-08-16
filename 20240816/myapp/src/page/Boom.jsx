import React from 'react'
import { useState, useEffect } from 'react'



const Boom = () => {

    const [over, setOver] = useState(false);
    const [count, setCount] = useState(0);
    const [boom, setBoom] = useState(Math.floor(Math.random() * 9));
    const [boomCount, setBoomCount] = useState(9);

    const increase = () => {
        setCount(count + 1);
    }

    onClickHandler = () => {
        let isActive = false;
        const isActiveClick = () => {
            isActive = true
        }
    }

    useEffect(() => {
        const data = async () => {
            const response = await 
        }
    })

    setCount

    return (
        <div className='boom-game-manager'>
            <span></span>
            여기는 폭탄 게임
        </div>
    )
}

export default Boom
