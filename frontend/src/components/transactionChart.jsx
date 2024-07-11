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

  return(  <div className="graph mx-auto sm:w-full sm:h-auto md:w-3/4 md:h-96 lg:w-[37.5rem] lg:h-[25rem]">
  <Line data={data} options={options} />
</div>)
};


