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
      </section>
    </main>
  );
}

export default App;
