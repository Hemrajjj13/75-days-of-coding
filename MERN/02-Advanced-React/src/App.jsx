import { Routes, Route  } from 'react-router-dom';
import Home from './08-React-Router/pages/Home'
import About from './08-React-Router/pages/About'
import Contact from './08-React-Router/pages/Contact'
import Display from './10-custom-hooks/Display';
import UserContext from './11-global-state/UserContext';
import Profile from './11-global-state/Profile';

const App = () => {
  const user = { name: "Alex", role: "Admin" };
  return (
      <UserContext.Provider value={user}>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/display' element={<Display />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      </UserContext.Provider>
    
  )
}

export default App