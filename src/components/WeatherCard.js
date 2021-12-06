/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { blueGrey } from '@mui/material/colors';

const WeatherCard = ({ weather }) => {
  const card = (
    <>
      <CardContent sx={{
        padding: 1,
        color: blueGrey[700],
      }}
      >
        <Typography>
          Temperature
        </Typography>
        <Typography className="weather">
          {weather.temp}
          <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="icon" />
        </Typography>
        <Typography>
          {weather.date}
        </Typography>
      </CardContent>
    </>
  );

  return (
    <Box className="card">
      <Card variant="outlined" className="card-size">{card}</Card>
    </Box>
  );
};

export default WeatherCard;
