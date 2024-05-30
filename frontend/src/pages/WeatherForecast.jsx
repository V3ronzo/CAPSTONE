// import React, { useState } from 'react';
// import axiosInstance from '../utils/axiosInstance';

// const WeatherForecast = () => {
//   const [location, setLocation] = useState({ latitude: '', longitude: '' });
//   const [weatherData, setWeatherData] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleChange = (e) => {
//     setLocation({ ...location, [e.target.name]: e.target.value });
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axiosInstance.get('/weather/forecast', {
//         params: {
//           latitude: location.latitude,
//           longitude: location.longitude,
//           current: 'temperature_2m,is_day,precipitation,rain,showers,snowfall',
//           hourly: 'temperature_2m,rain,showers,snowfall',
//           temperature_unit: 'fahrenheit',
//           wind_speed_unit: 'mph',
//           precipitation_unit: 'inch',
//         },
//       });
//       setWeatherData(response.data);
//       setShowModal(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Weather Forecast</h1>
//       <input
//         type="text"
//         name="latitude"
//         value={location.latitude}
//         onChange={handleChange}
//         placeholder="Enter latitude"
//       />
//       <input
//         type="text"
//         name="longitude"
//         value={location.longitude}
//         onChange={handleChange}
//         placeholder="Enter longitude"
//       />
//       <button onClick={handleSearch}>Search</button>

//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setShowModal(false)}>
//               &times;
//             </span>
//             {weatherData && (
//               <div>
//                 {/* Display weather data */}
//                 {/* ... */}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherForecast;

///// ... got a weird error from the code above but everything was fine -
// 12:40:35 AM [vite] Internal server error: Failed to resolve import "../utils/axiosInstance" from "src/pages/WeatherForecast.jsx". Does the file exist?

import React, { useState } from 'react';

const WeatherForecast = () => {
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [weatherData, setWeatherData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`
      );
      const data = await response.json();
      setWeatherData(data);
      setShowModal(true);
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

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            {weatherData && (
              <div>
                <h2>Current Weather</h2>
                <p>Temperature: {weatherData.current_weather.temperature} °F</p>
                <p>Wind Speed: {weatherData.current_weather.windspeed} mph</p>
                {/* Display other weather data as needed */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;