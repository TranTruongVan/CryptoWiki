import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Chart,
} from 'chart.js';

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  console.log("LineChart");
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#3b82f6',
        borderColor: '#3b82f6',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="md:p-8">
      <div className="flex justify-between items-center my-4">
        <div className="text-2xl font-bold text-blue-500">
          {coinName} Price Chart{' '}
        </div>
        <div className="flex items-center">
          <div className="font-bold text-lg mr-4">Change: {coinHistory?.data?.change}%</div>
          <div className="font-bold text-lg">Current {coinName} Price: $ {currentPrice}</div>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
