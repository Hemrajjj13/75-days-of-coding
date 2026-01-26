import React, { useState } from 'react'

const NameForm = () => {
    const [name, setName] = useState('');
  return (
    <div>
        <input 
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={event => setName(event.target.value)}
        />

        <p>You Typed {name}</p>
    </div>
  )
}

export default NameForm