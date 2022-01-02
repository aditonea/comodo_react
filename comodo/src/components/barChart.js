import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
    return <Pie
        data={{
            labels: ['Regular', 'VIP', 'Offer', 'Anniversary'],
            datasets: [
                {
                    label: '# of Reservations',
                    data: [35, 15, 10, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1,
                },
            ],
        }}
        width={1100}
        height={1100}
        options={{
            maintainAspectRatio: false,
        }
        } />;
}
