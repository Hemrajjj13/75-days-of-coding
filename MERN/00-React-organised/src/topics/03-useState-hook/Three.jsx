import React from 'react'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import ThemeToggle from './components/ThemeToggle';
import ColorSwitcher from './components/ColorSwitcher';

const Three = () => {
  return (
    <div>
        <h3>Day 03: useState Hook</h3>
        <div style={{margin: "10px", padding: "20px"}}>
        <ColorSwitcher />
        <Counter />
        <Toggle />
        <ThemeToggle />
    </div>
    </div>
  )
}

export default Three