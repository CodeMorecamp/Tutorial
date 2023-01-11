import { useState } from 'react'
import React from 'react'
import StateChild from './StateChild'


const StateParent = () => {


    const [counter, setCounter] = React.useState(0)
     function handleClick() {
        setCounter(counter + 1) 
     }   

     function resetCounter() {
        setCounter(0)
     }
    return (
    <div>
        <StateChild message = {counter + ' at Chicken Republic'} />
        <button onClick={handleClick} >{counter}</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
  )
}

// function handleClick() {
//     setWord('Eat Something at')   
//  }   
// return (
// <div>
//     <StateChild message = {word + ' at Chicken Republic'} />
//     <button onClick={handleClick}>Click here to update me</button>
// </div>
// )

export default StateParent