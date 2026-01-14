import React from 'react'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import ThemeToggle from './components/ThemeToggle';
import ColorSwitcher from './components/ColorSwitcher';


const App = () => {
  return (
    <div style={{margin: "10px", padding: "20px"}}>
      <ColorSwitcher />
      <Counter />
      <Toggle />
      <ThemeToggle />
    </div>
  );
}

export default App