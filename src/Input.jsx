import { useState } from "react";

function Input({ setCity }) {
  const [cityInput, setCityInput] = useState("");  // Local state for the input value

  return (
    <div>
      <input
        type="text"
        value={cityInput}
        onChange={(e) => {
          setCityInput(e.target.value)
        }}
      />
      <button onClick={(e) => {
        e.preventDefault()
        setCity(cityInput)
        }}
      >Set City</button>
    </div>
  );
}

export default Input