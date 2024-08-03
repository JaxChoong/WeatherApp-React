import { useState, useEffect } from 'react';
import './App.css';
import Input from './Input.jsx';
import WeatherData from './WeatherData.jsx';
import { Text,Flex,Image } from '@chakra-ui/react';

function App() {
  const [city, setCity] = useState("");            // State for the input city
  const [weather, setWeather] = useState(null);    // State for the weather data
  const [error, setError] = useState(null);        // State for the error message

  useEffect(() => {
    if (city) {                                    // Fetch data only if city is not empty
      fetch(`https://api.data.gov.my/weather/forecast?contains=${city}@location__location_name&limit=7`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            setWeather(data);                    // Set weather data to state if data is found
            setError(null);                      // Clear error if data is found
          } else {
            setWeather(null);                    // Clear weather data if no data is found
            setError("City not found!");          // Set error message
          }
        })
        .catch((error) => {
          setWeather(null);                      // Clear weather data on fetch error
          setError("An error occurred");         // Set error message
          console.error(error.message);
        });
    }
  }, [city]);                                     // Dependency array with city to re-run on city change

  return (
    <div>
      <Flex justify="center">
        <Image src="/weather.svg" alt="Weather" width="100px" height="100px"/>
      </Flex>
      <Text fontSize="3xl" margin="10px">Weather Forecast</Text>
      <Input setCity={setCity} />                  {/* Pass setCity to Input component */}
      {error && <Text fontSize ="md" margin ="5px" color ="red">{error}</Text>}                    {/* Display error message if exists */}
      {weather && !error &&                       
        <WeatherData weather={weather} />
      }
    </div>
  );
}

export default App;
