import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import { loadDaily } from '../redux/weatherData/weather';
import WeatherCard from './WeatherCard';
import Temperature from './Temperature';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
];

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
        <img className="img-width" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="spinner" />
      ) : (
        <>
          <Temperature unit={unit} onChange={onUnitChange} />
          <div className="flex">
            <Carousel breakPoints={breakPoints}>
              {dailyWeather && dailyWeather.map((weather) => (
                <WeatherCard key={weather.id} weather={weather} />
              ))}
            </Carousel>
          </div>
        </>
      )}
    </>
  );
};

export default WeatherContainer;
