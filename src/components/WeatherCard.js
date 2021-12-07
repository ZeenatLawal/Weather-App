/* eslint-disable react/prop-types */
import '../styles/WeatherCard.css';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const WeatherCard = ({ weather, onClick }) => {
  const card = (
    <>
      <CardContent sx={{
        padding: 1,
        color: blue[900],
      }}
      >
        <Typography sx={{ fontWeight: 'bold' }} color="secondary">
          Temperature
        </Typography>
        <Typography className="flex weather" sx={{ fontWeight: 'bold' }} color="secondary">
          {weather.temp}
          <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="icon" />
        </Typography>
        <Typography color="secondary">
          {weather.desc}
        </Typography>
        <Typography color="secondary">
          {weather.date}
        </Typography>
      </CardContent>
    </>
  );

  return (
    <Box className="card" onClick={onClick}>
      <Card variant="outlined" className="card-size">{card}</Card>
    </Box>
  );
};

export default WeatherCard;
