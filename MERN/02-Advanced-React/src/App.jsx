import { Routes, Route  } from 'react-router-dom';
import Home from './08-React-Router/pages/Home'
import About from './08-React-Router/pages/About'
import Contact from './08-React-Router/pages/Contact'
import Display from './10-custom-hooks/Display';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/display' element={<Display />} />
    </Routes>
    
  )
}

export default App