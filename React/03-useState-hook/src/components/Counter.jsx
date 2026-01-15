import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    const inc = () => {
      setCount(count + 1);
      if (count % 2 === 0) { setDark(true) } else{ setDark(false);}
    }
    const dec = () => {
      if (count <= 0) return;
      setCount(count - 1);
      if (count % 2 === 0) { setDark(true) } else{ setDark(false);}
    }

  return (
    <div style={{
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
      height: "100vh",
      width: "100vw"
    }}>
        <button onClick={inc}>+</button>
        <h2>Count: {count}</h2>
        <button onClick={dec}>-</button>
    </div>
  );
}

export default Counter