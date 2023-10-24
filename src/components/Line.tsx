import { Line } from 'react-chartjs-2'
import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

// TS Interface
interface OptionsInterface {
    responsive: boolean
    plugins: {
        legend: {
            position: string
        }
    }
}

interface DataInterface {
    labels: string[]
    datasets: [
        {
            label: string
            data: number[]
            borderColor: string
            backgroundColor: string
        },
        {
            label: string
            data: number[]
            borderColor: string
            backgroundColor: string
        },
    ]
}

//END INTERFACE

export const options: OptionsInterface = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
    },
}

const labels: string[] = [
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
]

export const data: DataInterface = {
    labels,
    datasets: [
        {
            label: 'Mes résultats',
            data: [40, 50, 80, 40, 50, 80, 40, 50, 80, 40, 50],
            borderColor: '#ff723e',
            backgroundColor: '#ff723e',
        },
        {
            label: 'Moyenne de classe',
            data: [20, 30, 100, 20, 30, 100, 20, 30, 100, 20, 30],
            borderColor: '#ffac8d',
            backgroundColor: '#ffac8d',
        },
    ],
}

export default function LineChart() {
    return (
        <div className="chart-component">
            <Line data={data} options={options} />
        </div>
    )
}
