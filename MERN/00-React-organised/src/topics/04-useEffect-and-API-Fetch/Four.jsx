import React from 'react'
import Effects from './components/Effects';
import Loading from './components/Loading';
import RenderTracker from './components/RenderTracker';
import DataDashboard from './components/DataDashboard';
import Posts from './components/Posts';

const Four = () => {
  return (
    <div>
      <h3>Day 04: useEffect and API Fetch</h3>
        <Effects />
        <Loading />
        <RenderTracker />
        <DataDashboard />
        <Posts />
    </div>
  )
}

export default Four