import React, { useEffect, useState } from 'react'

const RenderTracker = () => {
    const [count, setCount] = useState(0);

    useEffect(() => { console.log("MOUNT") }, []);

    useEffect(() => { console.log("UPDATE") }, [count])

    useEffect(() => {
        console.log(count)
    },[count])

    const handleClick = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default RenderTracker