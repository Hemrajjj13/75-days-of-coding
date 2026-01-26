import React from 'react'
import Effects from './components/Effects'
import Loading from './components/Loading'
import RenderTracker from './components/RenderTracker'
import DataDashboard from './components/DataDashboard'
import Posts from './components/Posts'

const App = () => {
  
  return (
      <div>
        <Effects />
        <Loading />
        <RenderTracker />
        <DataDashboard />
        <Posts />
      </div>
  )
}

export default App