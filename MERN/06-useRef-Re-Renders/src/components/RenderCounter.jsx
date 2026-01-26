import React, { useRef } from 'react'

const RenderCounter = () => {
    const renders = useRef(0);

    renders.current += 1;
    console.log(renders);

    console.log("Rendered:", renders.current);
    return (
        <h2>Check console</h2>
    )
}

export default RenderCounter