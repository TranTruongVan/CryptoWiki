import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Chart,
} from 'chart.js';
import { CircularProgress } from '@mui/material';

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);

const LineChart = ({
  coinHistory,
  currentPrice,
  coinName,
  timePeriod,
  isFetchingChart,
}) => {
  return (
    <div className="md:p-8 p-4">
      <div className="flex justify-between items-center my-4">
        <div className="md:text-2xl font-bold text-blue-500">
          {coinName} Price Chart{' '}
        </div>
        <div className="font-bold text-xs md:text-lg">
          Current {coinName} Price: $ {currentPrice}
        </div>
      </div>
      {isFetchingChart ? (
        <div className="w-full aspect-[2/1] flex justify-center items-center">
          <CircularProgress size="120px" />
        </div>
      ) : (
        <Line
          data={{
            labels: coinHistory?.prices.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return Number(timePeriod) === 1
                ? time
                : date.toLocaleDateString();
            }),
            datasets: [
              {
                label: 'Price In USD',
                data: coinHistory?.prices.map((coin) => coin[1]),
                fill: false,
                backgroundColor: '#3b82f6',
                borderColor: '#3b82f6',
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default LineChart;
