import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null);  // SAVE STATE FOR SETTING WEATHER

  useEffect(() => {                                        // USE EFFECT TO FETCH DATA                              
    fetch('https://api.data.gov.my/weather/forecast/')     // FETCH WEATHER DATA
      .then((response) => response.json())                 // CONVERT RESPONSE TO JSON          
      .then((data) => { 
        setWeather(data);                                 // SET WEATHER DATA TO STATE
        console.log(weather);                             
      })
      .catch((error) => console.error(error.message));
  }
  , []);

  return (
    <>
      <h1>Weather Forecast</h1>
      {weather ? (                                         // CHECK IF WEATHER DATA IS AVAILABLE
        <pre>{JSON.stringify(weather, null, 2)}</pre>      // DISPLAY WEATHER DATA
      ) : (
        <p>Loading...</p>                                 // DISPLAY LOADING MESSAGE
      )}
    </>
  )
}

export default App
