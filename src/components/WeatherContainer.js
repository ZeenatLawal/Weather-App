import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadDaily } from '../redux/weatherData/weather';
import WeatherCard from './WeatherCard';
import Temperature from './Temperature';

const WeatherContainer = () => {
  const loading = useSelector((state) => state.weatherReducer.loading);
  const dailyWeather = useSelector((state) => state.weatherReducer.daily);

  const dispatch = useDispatch();
  const [unit, setUnit] = useState('metric');

  useEffect(() => {
    dispatch(loadDaily(unit));
  }, [dispatch]);

  const onUnitChange = (unit) => {
    setUnit(unit);
    dispatch(loadDaily(unit));
  };

  return (
    <>
      { loading ? (
        <img className="w-100" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="spinner" />
      ) : (
        <>
          <Temperature unit={unit} onChange={onUnitChange} />
          {dailyWeather && dailyWeather.map((weather) => (
            <WeatherCard key={weather.id} weather={weather} />
          ))}
        </>
      )}
    </>
  );
};

export default WeatherContainer;
