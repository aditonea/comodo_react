import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ reservations }) {
    const data = [
        reservations.filter(reservation => reservation.category === "Regular").length,
        reservations.filter(reservation => reservation.category === "VIP").length,
        reservations.filter(reservation => reservation.category === "Offer").length,
        reservations.filter(reservation => reservation.category === "Anniversary").length,
    ]

    return <Pie
        data={{
            labels: ['Regular', 'VIP', 'Oferta', 'Aniversare'],
            datasets: [
                {
                    label: '# of Reservations',
                    data,
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
        width={500}
        height={500}
        options={{
            maintainAspectRatio: false,
        }
        } />;
}
