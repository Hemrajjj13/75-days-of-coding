import React from 'react'
import RenderCounter from './components/RenderCounter'
import FocusInput from './components/FocusInput'
import AutoFocus from './components/AutoFocus'

const Six = () => {
  return (
    <div>
        <h3>06: useRef and Re-renders</h3>
        <RenderCounter />
        <FocusInput />
        <AutoFocus />
    </div>
  )
}

export default Six