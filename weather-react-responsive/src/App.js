import hotBackground from './assets/hot.jpg'
import coldBackground from './assets/cold.jpg'
import Details from './components/Details'
import { useEffect, useState } from 'react';
import { getFormattedWeatherData } from './weather';

function App() {

  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData("paris", units) /* en weather.js a esta funcion se le pasa city y units */
      /*   console.log(data); */
      setWeather(data)
    };
    fetchWeatherData();
  }, [])

  return (
    <div className="app" style={{ backgroundImage: `url(${coldBackground})` }}>
      <div className="overlay">
        {/* quiero renderizar container solo si esta weather, sino no */}
        {
          weather && (
            <div className="container">
              <div className="section section__inputs">
                <input type='text' name='city' placeholder='Enter name of the City...'></input>
                <button>°F</button>
              </div>


              <div className="section section__temperature">
                <div className='icon'>
                  <h3>{`${weather.name}, ${weather.country}`}</h3>
                  <img src={weather.iconURL} alt="prueba"></img>
                  <h3>{weather.description}</h3>
                </div>
                <div className='temperature'>
                  <h1>{`${weather.temp.toFixed()} ${units === "metric" ? "°C" : "°F"
                    }`}</h1> {/* si la unidad es igual a metric mostrame Celsius, sino Farenheit */}
                </div>
              </div>

              {/* ${units === "metric" ? "C" : "F"
                    } */}


              {/* bottom details */}

              <Details weather={weather} units={units}/>
            </div>
          )
        }

      </div>
    </div>
  );
}

export default App;
