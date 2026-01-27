import React from 'react'
import { useState } from 'react'

const Toggle = () => {
    const [show, setShow] = useState(false);
  return (
    <div>
        <button onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
        </button>

        {show && <p>Hello World</p>}
    </div>
  );
}

export default Toggle