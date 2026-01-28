import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Contact = () => {
  const navigate= useNavigate();

  const handleClick = () => {
    navigate("/")
  }
  return (
    <div>
        Contact Me:
        <Link to="/">Home</Link>
        <Footer />
        <h3>
          <button onClick={handleClick}>Home</button>
        </h3>
    </div>
  )
}

export default Contact