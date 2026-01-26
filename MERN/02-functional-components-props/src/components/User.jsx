import React from 'react'

// const User = (props) => {
// (Destructuring Props)
const User = ({name = "Guest", role, age}) => { 
  return (
    <div>
        <h1>{name}</h1>
        <h3>Role: {role}</h3>
        <h3>Age: {age}</h3>
    </div>
  )
}

export default User