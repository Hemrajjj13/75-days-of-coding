import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <nav>
            <Link to="/" style={{padding: "10px"}}>Home</Link> 
            <Link to="/about" style={{padding: "10px"}}>About </Link>
            <Link to="/contact" style={{padding: "10px"}}>Contact </Link>
        </nav>
        <Footer />
    </div>
  )
}

export default Home