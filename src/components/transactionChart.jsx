import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

export const TransactionChart = ({ transactions }) => {
  const data = {
    labels: transactions.map((transaction) => transaction.date),
    datasets: [
      {
        label: 'Transaction Amount',
        data: transactions.map((transaction) => parseFloat(transaction.amount)),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
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

  return <Line data={data} options={options} className='graph' />;
};


