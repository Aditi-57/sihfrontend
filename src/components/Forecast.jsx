import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

import './Forecast.css';

const Forecast = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'pH Levels',
        data: [6.9, 7.1, 7.22, 7.2, 6.7, 8.5, 8.7, 8.9],
        fill: true,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'red',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="forecast">
      <div className="forecast-header">
        <h2>Forecasted Quality</h2>
      </div>
      <div className="forecast-cards">
        <div className="forecast-card">
        <p>Today</p>
          <img src="/icons/water.png" alt="Sunny" className="quality-icon1" />
          
          <h2>7.72 pH</h2>
        </div>
        <div className="forecast-card">
        <p>Tomm.</p>
          <img src="/icons/water.png" alt="Cloudy" className="quality-icon2" />
          
          <h2>7.82 pH</h2>
          <div className="water-animation"></div>
        </div>
        <div className="forecast-card">
        <p>10 Sept</p>
          <img src="/icons/water.png" alt="Rainy" className="quality-icon" />
         
          <h2>7.22 pH</h2>
        </div>
        <div className="forecast-card">
        <p>11 Sept</p>
          <img src="/icons/water.png" alt="Sunny" className="quality-icon4" />
          
          <h2>8.5 pH</h2>
        </div>
        <div className="forecast-card">
        <p>12 Sept</p>
          <img src="/icons/water.png" alt="Cloudy" className="quality-icon" />
          
          <h2>8.1 pH</h2>
        </div>
        <div className="forecast-card">
        <p>13 Sept</p>
          <img src="/icons/water.png" alt="Rainy" className="quality-icon3" />
          
          <h2>7.1 pH</h2>
        </div>
      </div>
      <div className="chart-container">
        <h3 className="chart-title">Quality v/s Month</h3>
        <Line data={data} options={options} />
      </div>
      
      
    </div>
  );
};

export default Forecast;
