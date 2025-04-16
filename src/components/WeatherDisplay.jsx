import React from 'react'

export default function WeatherDisplay({ weather }) {
    const { temperature, conditions } = weather;

    let temparatureStyle = {
        color: temperature > 20 ? "red" : "blue",
    }
  return (
    <div>
      <p>
        <span style={temparatureStyle}>Temperature: {temperature}</span>
      </p>

      <p>Conditions: {conditions};</p>
    </div>
  );
}

