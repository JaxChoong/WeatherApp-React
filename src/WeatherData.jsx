import WeatherIcon from "./WeatherIcon";

function WeatherData({ weather }) {
  return(
    <>{
        weather.map((item,index) => (
          <div class="">
            <WeatherIcon weather={item.summary_forecast} />        {/* Pass weather detail to WeatherIcon */}
            <h3>Location: {item.location.location_name}</h3>
            <h3>Date: {item.date}</h3>
            <h3>Morning Forecast: {item.morning_forecast}</h3>
            <h3>Afternoon Forecast: {item.afternoon_forecast}</h3>
            <h3>Night Forecast: {item.night_forecast}</h3>
            <h3>Summary Forecast: {item.summary_forecast}</h3>
            <h3>Summary When: {item.summary_when}</h3>
            <h3>Minimum Temperature: {item.min_temp}</h3>
            <h3>Maximum Temperature:{item.max_temp}</h3>
          </div> 
        ))
      }
    </>
  )
}

export default WeatherData