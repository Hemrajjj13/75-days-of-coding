import React from 'react'
import { useState } from 'react'

const ColorSwitcher = () => {
    const [color, setColor] = useState('#000000');

    const generateColor = () => {
        const randomColor = '#' +   Math.floor(Math.random() * 16777215).toString(16);
        
        setColor(randomColor)
    }
    
    const copyText = () => {
        const text = document.getElementById('color').innerText;
        navigator.clipboard.writeText(text)
            .then(()=> {
                console.log("Text copied to clipboard", text)
            })
            .catch(err => {
                console.log("Failed to copy:", err);
            })
    }
    

  return (
    <div style={{
        height: "500px",
        width: "500px",
        alignItems: "center",
        border: "2px solid white",
        display: "flex",
        justifyContent: "center",
        flexDirection:'column'
    }}>
        <h1>Color Switcher</h1>
        <div id='color-div' style={{
            height: "150px",
            width: "200px",
            backgroundColor: color,
            border: "2px solid gray",
            margin: "5px"
        }}></div>
        <h3 id='color'>{color}</h3>
        <button style={{margin: "5px"}} onClick={copyText}>Copy value</button>
        <button style={{margin: "5px"}} onClick={generateColor}>Change Color</button>
    </div>
  )
}

export default ColorSwitcher