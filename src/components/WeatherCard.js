import React from 'react';
import { useSelector } from 'react-redux';

const WeatherCard = () => {
  const loading = useSelector((state) => state.weatherReducer.loading);

  return (
    <>
      { loading ? (
        <img className="w-100" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="spinner" />
      ) : (
        <p>
          Loading Data
        </p>
      )}
    </>
  );
};

export default WeatherCard;
