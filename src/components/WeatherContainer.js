import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel, { consts } from 'react-elastic-carousel';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Button from '@mui/material/Button';
import { loadDaily, loadWeather } from '../redux/weatherData/weather';
import WeatherCard from './WeatherCard';
import Temperature from './Temperature';
import Barchart from './Barchart';

const WeatherContainer = () => {
  const loading = useSelector((state) => state.weatherReducer.loading);
  const dailyWeather = useSelector((state) => state.weatherReducer.daily);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 558, itemsToShow: 3 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <ArrowCircleLeftIcon fontSize="large" /> : <ArrowCircleRightIcon fontSize="large" />;
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    );
  };

  const dispatch = useDispatch();
  const [unit, setUnit] = useState('metric');

  useEffect(() => {
    dispatch(loadDaily(unit));
  }, [dispatch]);

  const onUnitChange = (unit) => {
    setUnit(unit);
    dispatch(loadDaily(unit));
  };

  const handleRefresh = () => {
    dispatch(loadDaily(unit));
  };

  const handleChart = (date) => {
    dispatch(loadWeather(date));
  };

  const weather = useSelector((state) => state.weatherReducer.weather);

  return (
    <>
      { loading ? (
        <img className="img-width" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="spinner" />
      ) : (
        <>
          <div className="nav">
            <Temperature unit={unit} onChange={onUnitChange} />
            <Button onClick={handleRefresh} variant="contained" className="refresh">Refresh</Button>
          </div>
          <div className="flex cards">
            <Carousel breakPoints={breakPoints} renderArrow={myArrow} pagination={false}>
              {dailyWeather && dailyWeather.map((weather) => (
                <>
                  <WeatherCard
                    key={weather.id}
                    weather={weather}
                    onClick={() => handleChart(weather.date)}
                  />
                </>
              ))}
            </Carousel>
          </div>
          <Barchart weather={weather} />
        </>
      )}
    </>
  );
};

export default WeatherContainer;
