import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [open, setOpen] = useState(false);

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
      setOpen(!open);
    }
  };

  const image = weather?.weather;
  //   console.log({ weather });

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && open && (
        <div className="city">
          <h2 className="city-name">
            <span className="">{weather.name}</span>
            <sup>{weather.sys.country}</sup>
            <div className="img-open" onClick={() => setOpen(!open)}>
              <img
                className="close-img"
                src={require("./img/close.png")}
                alt={`a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by ariefstudio - Flaticon</a>`}
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </div>
          </h2>

          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>

          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${image[0].icon}@2x.png`}
              alt={image[0].description}
            />

            <p></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
