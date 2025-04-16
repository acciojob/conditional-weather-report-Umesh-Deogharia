import React from "react";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const weatherData = { temperature: 25, conditions: "Sunny" };

  return (
    <div>
      <WeatherDisplay weather={weatherData} />
    </div>
  );
};

export default App;
