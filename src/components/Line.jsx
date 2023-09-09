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
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
    },
}

const labels = [
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

export const data = {
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
