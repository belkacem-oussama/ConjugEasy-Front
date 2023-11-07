import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

// TS Interface
interface OptionsInterface {
    plugins: {
        tooltip: {
            titleFont: {
                size: number
            }
            bodyFont: {
                size: number
            }
        }
        legend: {
            display: boolean
            responsive: boolean
            position: string
            align: string
        }
    }
}

interface DataInterface {
    labels: string[]
    datasets: [
        {
            data: number[]
            backgroundColor: string[]
            borderColor: string[]
        },
    ]
}

//End Interface

export const options: OptionsInterface = {
    plugins: {
        tooltip: {
            titleFont: {
                size: 20,
            },
            bodyFont: {
                size: 20,
            },
        },
        legend: {
            display: true,
            responsive: true,
            position: 'bottom',
            align: 'center',
        },
    },
}

export const data: DataInterface = {
    labels: ['Présent', 'Passé', 'Imparfait', 'Futur', 'Passé Composé'],
    datasets: [
        {
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#ff723e',
                '#ff8355',
                '#ff946b',
                '#ffa581',
                '#ffb696',
            ],
            borderColor: [
                '#ff723e',
                '#ff8355',
                '#ff946b',
                '#ffa581',
                '#ffb696',
            ],
        },
    ],
}

export default function DoughnutChart() {
    return <Doughnut data={data} options={options} />
}
