import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  const {id} = useParams();

  return (
    <div>
        <nav>
            <Link to="/home" style={{padding: "10px"}}>Home</Link>
            <Link to="/about" style={{padding: "10px"}}>About </Link>
            <Link to="/contact" style={{padding: "10px"}}>Contact </Link>
        </nav>
        {/* <h3>{id}</h3> */}

        

        <Footer />
    </div>
  )
}

export default Home