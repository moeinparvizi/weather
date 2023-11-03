// import images
import searchImage from "../assets/images/search.png";
import clearImage from "../assets/images/clear.png";
import snowImage from "../assets/images/snow.png";
import drizzleImage from "../assets/images/drizzle.png";
import rainImage from "../assets/images/rain.png";
import cloudImage from "../assets/images/cloud.png";

export default function Weather({
  onSetCityName,
  onSetHumidity,
  onSetWind,
  onSetTemp,
  onSetIcon,
}) {
  function iconChecker(reg) {
    if (reg.weather[0].icon === "01d" || reg.weather[0].icon === "01n") {
      onSetIcon(clearImage);
    }
    if (reg.weather[0].icon === "02d" || reg.weather[0].icon === "02n") {
      onSetIcon(cloudImage);
    }
    if (reg.weather[0].icon === "03d" || reg.weather[0].icon === "03n") {
      onSetIcon(drizzleImage);
    }
    if (reg.weather[0].icon === "04d" || reg.weather[0].icon === "04n") {
      onSetIcon(drizzleImage);
    }
    if (reg.weather[0].icon === "09d" || reg.weather[0].icon === "09n") {
      onSetIcon(rainImage);
    }
    if (reg.weather[0].icon === "10d" || reg.weather[0].icon === "10n") {
      onSetIcon(rainImage);
    }
    if (reg.weather[0].icon === "13d" || reg.weather[0].icon === "13n") {
      onSetIcon(snowImage);
    }
  }
  // pring on page with state
  function printOnPage(reg) {
    onSetCityName(reg.name);
    onSetHumidity(reg.main.humidity);
    onSetWind(reg.wind.speed);
    onSetTemp(reg.main.temp);
    iconChecker(reg);
  }

  // fetching
  async function search(inp) {
    const apikey = "303e94191e8dc309c73f3faba0936d35";
    const url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${inp}&appid=${apikey}`;
    const fetchUrl = await fetch(url);
    const reg = await fetchUrl.json();
    if (fetchUrl.status == 404) {
      alert("your city not found");
    } else {
      printOnPage(reg);
    }
  }

  // regex condition
  function regTest() {
    const inp = document.querySelector(".top-bar-getcity").value;
    const reg = /[a-z0-9]{3,15}/;
    document.querySelector(".top-bar-getcity").style.border = "none";
    if (inp == "" || inp == null) {
      document.querySelector(".top-bar-getcity").style.border = "3px solid red";
    } else {
      if (reg.test(inp)) {
        document.querySelector(".top-bar-getcity").style.border = "none";
        search(inp);
      } else {
        document.querySelector(".top-bar-getcity").style.border =
          "3px solid red";
      }
    }
  }

  return (
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
      <figure onClick={regTest} className="top-bar-search" role="button">
        <img src={searchImage} alt="search button" className="search-image" />
      </figure>
    </div>
  );
}
