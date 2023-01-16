import hotBackground from './assets/hot.jpg'
import Details from './components/Details'
import { useEffect, useState } from 'react';
import { getFormattedWeatherData } from './weather';

function App() {
  const [city, setCity] = useState("mar del plata");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units)
      setWeather(data);
    };

    fetchWeatherData();
  }, [units, city])

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isC = currentUnit === "C";
    button.innerText = isC ? "°F" : "°C";
    setUnits(isC ? 'metric' : 'imperial');
  }

  const enterKeyPress = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value)
    }
  }

  return (
    <div className="app" style={{ backgroundImage: `url(${hotBackground})` }}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
              <div className="section section__inputs">
                <input onKeyDown={enterKeyPress} type='text' name='city' placeholder='City name...'></input>
                <button onClick={(e) => handleUnitsClick(e)}>°F</button>
              </div>
              <div className="section section__temperature">
                <div className='icon'>
                  <h3>{`${weather.name}, ${weather.country}`}</h3>
                  <img src={weather.iconURL} alt="prueba"></img>
                  <h3>{weather.description}</h3>
                </div>
                <div className='temperature'>
                  <h1>{`${weather.temp.toFixed()} ${units === "metric" ? "°C" : "°F"
                    }`}</h1>
                </div>
              </div>
              <Details weather={weather} units={units} />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
