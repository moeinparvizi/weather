// react import
import { useState } from "react";
// style import
import "./assets/style/master.css";
// components import
import Weather from "./Components/weather";
// import images
import humidityImage from "./assets/images/humidity.png";
import windImage from "./assets/images/wind.png";
function App() {
  // states for showing data
  const [cityName, setCityName] = useState("enter your city");
  const [humidity, setHumidity] = useState("0");
  const [wind, setWind] = useState("0");
  const [temp, setTemp] = useState("0");
  const [icon , setIcon] = useState('')
  return (
    <main className="container">
      <section className="container-weather">
        <Weather
          onSetTemp={setTemp}
          onSetWind={setWind}
          onSetCityName={setCityName}
          onSetHumidity={setHumidity}
          onSetIcon={setIcon}
        />

        <div className="weather-show">
          <figure className="show-image">
            <img src={icon} alt="" />
          </figure>
          <span className="show-grad">{temp}c</span>
          <span className="show-location">{cityName}</span>
          <div className="data-container">
            <div className="element">
              <img src={humidityImage} className="icon" alt="" />
              <div className="data">
                <div className="humidity-percent">{humidity}%</div>
                <div className="text">humidity</div>
              </div>
            </div>

            <div className="element">
              <img src={windImage} className="icon" alt="" />
              <div className="data">
                <div className="wind-rate">{wind} km/h</div>
                <div className="text">wind speed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
