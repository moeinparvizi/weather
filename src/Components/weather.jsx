export default function Weather({ image }) {
  const apikey = "303e94191e8dc309c73f3faba0936d35";

  function search(){
    alert('every thinks is ok')
  }

  function regTest() {
    const inp = document.querySelector(".top-bar-getcity").value;
    const reg = /^[a-z0-9_-]{3,15}$/
    if (inp == "" || inp == null) {
      alert("Please enter a city name");
    } else {
      if (reg.test(inp)) {
        search()
      }else{
        alert('dorost vared kon')
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
