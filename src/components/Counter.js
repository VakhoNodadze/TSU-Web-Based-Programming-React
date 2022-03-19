import { useState } from 'react'
import './counter.css'


const Counter = ({ counter, onIncrement, onDecrement} ) => {

    return (
        <div className='counter-container'>
            <span className='counter-value'>{counter}</span>
            <button className='button button-increment' onClick={onIncrement}>Increment</button>
            <button className='button button-decrement' onClick={onDecrement}>Decrement</button>
        </div>
    )
}

export default Counter