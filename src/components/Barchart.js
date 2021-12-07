/* eslint-disable react/prop-types */
import '../styles/Barchart.css';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Barchart = ({ weather }) => {
  const temps = [];
  const time = [];
  if (weather) {
    weather.forEach((list) => {
      temps.push(list.temp);
      time.push(list.time);
    });
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Today\'s Temperatures',
      },
    },
  };

  const data = {
    labels: time,
    datasets: [
      {
        label: 'Temperature',
        data: temps,
        backgroundColor: '#ffca28',
        borderColor: '#8ecae6',
        borderWidth: 1,
        hoverBackgroundColor: '#ffe082',
      },
    ],
  };

  return (
    <Bar options={options} data={data} className="bar" />
  );
};

export default Barchart;
