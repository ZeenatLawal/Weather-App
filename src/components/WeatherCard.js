/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const WeatherCard = ({ weather }) => {
  const card = (
    <>
      <CardContent>
        <Typography>
          Temperature
        </Typography>
        <Typography>
          {weather.temp}
          <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="icon" />
        </Typography>
        <Typography>
          {weather.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Chart</Button>
      </CardActions>
    </>
  );

  return (
    <Box className="card">
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default WeatherCard;
