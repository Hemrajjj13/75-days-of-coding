import { Routes, Route  } from 'react-router-dom';
import Home from './topics/Home.jsx';
import One from './topics/01-folder/One';
import Two from './topics/02-functional-components-props/Two';
import Three from './topics/03-useState-hook/Three';
import Four from './topics/04-useEffect-and-API-Fetch/Four';
import Five from './topics/05-forms-and-controlled-components/Five';
import Six from './topics/06-useRef-Re-Renders/Six';
import NotFound from './topics/NotFound.jsx';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/one' element={<One />} />
        <Route path='/two' element={<Two />} />
        <Route path='/three' element={<Three />} />
        <Route path='/four' element={<Four />} />
        <Route path='/five' element={<Five />} />
        <Route path='/six' element={<Six />} />
        <Route path='*' element={<NotFound />} />
        {/* <Route path='/eight' element={<Eight />} /> */}
        {/* <Route path='/two' element={<Two />} /> */}

      </Routes>
      {/* <One />
      <Two />
      <Three />
      <Four /> */}
      {/* <Five /> */}
      {/* <Six /> */}
    </div>
  )
}

export default App