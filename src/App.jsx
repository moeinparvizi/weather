// import React from 'react'
import "./assets/style/master.css";

// import images
import searchImage from "./assets/images/search.png";
import clearImage from "./assets/images/clear.png";
import windImage from "./assets/images/wind.png";
import snowImage from "./assets/images/snow.png";
import drizzleImage from "./assets/images/drizzle.png";
import humidityImage from "./assets/images/humidity.png";
import rainImage from "./assets/images/rain.png";
import cloudImage from "./assets/images/cloud.png";

function App() {
  return (
    <main className="container">
      <section className="container-weather">
        <div className="top-bar">
          <input
            type="text"
            name="getcity"
            placeholder="tehran"
            className="top-bar-getcity"
          />
          {/*
         !maby its not working role=button
        */}
          <figure className="top-bar-search" role="button">
            <img
              src={searchImage}
              alt="search button"
              className="search-image"
            />
          </figure>
        </div>
        <div className="weather-show">
          <figure className="show-image">
            <img src={cloudImage} alt="" />
          </figure>
          <span className="show-grad">24c</span>
          <span className="show-location">tehran</span>
          <div className="data-container">

            <div className="element">
              <img src={humidityImage} className="icon" alt="" />
              <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">humidity</div>
              </div>
            </div>

            <div className="element">
              <img src={windImage} className="icon" alt="" />
              <div className="data">
                <div className="humidity-percent">18 km/h</div>
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
