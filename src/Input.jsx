import { useState } from "react";
import {Button, Input} from '@chakra-ui/react';

function useInput({ setCity }) {
  const [cityInput, setCityInput] = useState("");  // Local state for the input value

  return (
    <div>
      <Input  variant="filled" placeholder="Enter city name" _active={{backgroundColor: "white"}} _focus={{backgroundColor: "white"}} color={"black"} margin="10px"
        type="text"
        value={cityInput}
        onChange={(e) => {
          setCityInput(e.target.value)
        }}
      />
      <Button variant = "outline" colorScheme ="white" marginLeft="10px"onClick={(e) => {
        e.preventDefault()
        setCity(cityInput)
        console.log(cityInput)
        }}
      >Check Weather</Button>
    </div>
  );
}

export default useInput