const Weather = ({ w }) => {
    return (
      <>
        {!w ? (
          <p>...</p>
        ) : (
          <>
            <h3>Weather in {w.name}</h3>
            <p>
              Temperature: {w.main.temp} ℃
              <br/>
          <img src={`https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`}/>
            </p>
            <p>Wind: {w.wind.speed} m/s</p>
          </>
        )}
      </>
    )
  }

export default Weather