import React from 'react'
import useLocalStorage from './useLocalStorage'
const Display = () => {
    const [name, setName] = useLocalStorage("name", "");
    console.log(useLocalStorage);
    console.log(name);
  return (
    <div>
        <input
          value={name}
          onChange={(e)=> setName(e.target.value)}
          placeholder='Enter name'
        />

        <p>Name: { name }</p>

    </div>
  )
}

export default Display