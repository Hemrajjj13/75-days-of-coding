import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/" >Home</Link><br/>
        <Link to="/one" >One</Link><br/>
        <Link to="/two" >Two</Link><br/>
        <Link to="/three" >Three</Link><br/>
        <Link to="/four" >Four</Link><br/>
        <Link to="/five" >Five</Link><br/>
        <Link to="/six" >Six</Link><br/>

    </div>
  )
}

export default Home