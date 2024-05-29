import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const WeatherForecast = () => {
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get('/weather/forecast', {
        params: {
          latitude: location.latitude,
          longitude: location.longitude,
          current: 'temperature_2m,is_day,precipitation,rain,showers,snowfall',
          hourly: 'temperature_2m,rain,showers,snowfall',
          temperature_unit: 'fahrenheit',
          wind_speed_unit: 'mph',
          precipitation_unit: 'inch',
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <input
        type="text"
        name="latitude"
        value={location.latitude}
        onChange={handleChange}
        placeholder="Enter latitude"
      />
      <input
        type="text"
        name="longitude"
        value={location.longitude}
        onChange={handleChange}
        placeholder="Enter longitude"
      />
      <button onClick={handleSearch}>Search</button>
      {weatherData && (
        <div>
          {/* weather data */}
          <h2>Current Weather</h2>
          <p>Temperature: {weatherData.current_weather.temperature} °F</p>
          <p>Is Day: {weatherData.current_weather.is_day ? 'Yes' : 'No'}</p>
          <p>Precipitation: {weatherData.current_weather.precipitation} inch</p>
          <p>Rain: {weatherData.current_weather.rain} inch</p>
          <p>Showers: {weatherData.current_weather.showers} inch</p>
          <p>Snowfall: {weatherData.current_weather.snowfall} inch</p>

          <h2>Hourly Forecast</h2>
          {weatherData.hourly.time.map((time, index) => (
            <div key={time}>
              <p>Time: {time}</p>
              <p>Temperature: {weatherData.hourly.temperature_2m[index]} °F</p>
              <p>Rain: {weatherData.hourly.rain[index]} inch</p>
              <p>Showers: {weatherData.hourly.showers[index]} inch</p>
              <p>Snowfall: {weatherData.hourly.snowfall[index]} inch</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;