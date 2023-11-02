export default function Weather({ image }) {
  const apikey = "303e94191e8dc309c73f3faba0936d35";

  function search() {
    const inp = document.querySelector('.top-bar-getcity').value
    alert(inp)
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
      <figure onClick={search} className="top-bar-search" role="button">
        <img src={image} alt="search button" className="search-image" />
      </figure>
    </div>
  );
}
