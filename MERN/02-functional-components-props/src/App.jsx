// import React, { use } from 'react'
import Welcome from './components/Welcome'
import User from './components/User'
import Card from './components/Card'
import Button from './components/Button'
import Profile from './components/Profile'
import profiles from './assets/Profiles.js'
import Catalog from './components/Interactive Product Catalog/Catalog.jsx'

const App = () => {
  function handleClick() {
    alert("Button Clicked");
  }
  return (
    <div>
    <Catalog />
      {/* <Welcome />
      <User 
        name = "Hemraj"
        role = "Devloper"
        age = {22}
      />
      <Card title="React" description="Frontend Library"/>
      <Card title="Node" description="Backend Runtime"/>
      <Card title="MongoDB" description="NoSQL Database"/>

      <Button onClick={handleClick}/>

      <hr />

      <div className='profiles-container'>
          {profiles.map((user, index) =>
            <Profile 
              key={index}
              name={user.name}
              skills={user.skills}
              isActive={user.isActive}
            />
        )} */}
      {/* </div> */}

    </div>
  );
}

export default App