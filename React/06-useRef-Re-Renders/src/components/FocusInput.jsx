import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
    console.log(inputRef.current.focus())
  }

  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default FocusInput