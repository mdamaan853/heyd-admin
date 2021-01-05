import React from 'react'
import { Pie, Line,defaults } from 'react-chartjs-2'
import "../App.css";

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const LineChart = () => {
  return (
    <div className="linechat">
      <h1></h1>
      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'Number of Users',
              data: [98, 39, 3,65, 1, 33],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            {
                label: 'Number of Orders',
                data: [89, 12, 3,25, 1, 43],
                backgroundColor: [
                  // 'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  // 'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1, 
            },
              {
                label: 'Number of Subscription',
                data: [50, 10, 43,96, 1, 63],
                backgroundColor: [
                  // 'rgba(255, 99, 132, 0.2)',
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  // 'rgba(255, 99, 132, 1)',
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            }
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default LineChart
