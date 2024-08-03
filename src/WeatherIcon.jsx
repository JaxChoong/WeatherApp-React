import { useState } from "react";

function WeatherIcon({ weather }) {
  if (weather == "Berjerebu"){
    return <img src="/fog.svg" alt="Berjerebu" style={{width:'100px',height : '100px'}}/>
  }  
  else if (weather == "Tiada hujan"){
    return <img src="/sun.svg" alt="Tiada hujan" style={{width:'100px',height : '100px'}}/>
  }
  else if (weather.includes("Hujan")){
    return <img src="/rain.svg" alt="Hujan" style={{width:'100px',height : '100px'}}/>
  }
  else{
    return <img src="/storm.svg" alt="Ribut" style={{width:'100px',height : '100px'}}/>
  }
}

export default WeatherIcon