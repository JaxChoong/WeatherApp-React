import { useState, useEffect } from 'react';
import './App.css';
import Input from './Input.jsx';
import WeatherIcon from './WeatherIcon.jsx';
import WeatherData from './WeatherData.jsx';
function App() {
  const [city, setCity] = useState("");            // State for the input city
  const [weather, setWeather] = useState(null);    // State for the weather data

  useEffect(() => {
    if (city) {                                    // Fetch data only if city is not empty
      fetch(`https://api.data.gov.my/weather/forecast?contains=${city}@location__location_name`)
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);                        // Set weather data to state
          console.log(data);
        })
        .catch((error) => console.error(error.message));
    }
  }, [city]);                                     // Dependency array with city to re-run on city change

  return (
    <>
      <h1>Weather Forecast</h1>
      <Input setCity={setCity} />                  {/* Pass setCity to Input component */}
      {weather ? (                                 // Check if weather data is available
        <WeatherData weather={weather} />         
      ) : (
        <p>Loading...</p>                         // Display loading message
      )}
    </>
  );
}

export default App;