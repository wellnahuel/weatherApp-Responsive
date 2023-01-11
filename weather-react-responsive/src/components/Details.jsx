import React from 'react'
import { TiArrowDownOutline } from 'react-icons/ti'
import "./details.css"

const Details = () => {
    return (
        <div className='section section__details'>
            <div className='card'>
                <div className='details__card-icon'>
                    <TiArrowDownOutline />
                    <small>min</small>
                </div>
                <h2>33 °C</h2>
            </div>

            <div className='card'>
                <div className='details__card-icon'>
                    <TiArrowDownOutline />
                    <small>min</small>
                </div>
                <h2>33 °C</h2>
            </div>

            <div className='card'>
                <div className='details__card-icon'>
                    <TiArrowDownOutline />
                    <small>min</small>
                </div>
                <h2>33 °C</h2>
            </div>

            <div className='card'>
                <div className='details__card-icon'>
                    <TiArrowDownOutline />
                    <small>min</small>
                </div>
                <h2>33 °C</h2>
            </div>

        
        </div>
    )
}

export default Details