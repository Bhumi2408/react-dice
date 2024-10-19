import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount] = useState(0);
  const increment = () =>{
    setCount((prev)=>prev+2);
    setCount((preval)=>preval+1);
  }
  const decrement = ()=>{
    setCount(count - 1);
  }
  const Reset = () =>{
    setCount(0);
  }
  return (
    <div>
       <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
       <button onClick={increment}>Increment</button>
       <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter
