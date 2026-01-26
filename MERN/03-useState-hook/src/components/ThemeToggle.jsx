import React, { useState } from 'react'

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  return (
    <div style={{
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
      height: "100vh",
      width: "100vw"
    }}>
      <button onClick={() => setDark(prev => !prev)}>Switch Theme</button>
    </div>
  )
}

export default ThemeToggle