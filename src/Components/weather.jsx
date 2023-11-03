export default function Weather({
  image,
  onSetCityName,
  onSetHumidity,
  onSetWind,
  onSetTemp,
}) {
  // pring on page with state
  function printOnPage(reg) {
    onSetCityName(reg.name);
    onSetHumidity(reg.main.humidity);
    onSetWind(reg.wind.speed);
    onSetTemp(reg.main.temp);
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
    const reg = /^[a-z0-9_-]{3,15}$/;
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
        <img src={image} alt="search button" className="search-image" />
      </figure>
    </div>
  );
}
