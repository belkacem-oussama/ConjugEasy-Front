import { Link } from 'react-router-dom'

import Square from '../components/Square.tsx'
import LineChart from '../components/Line.tsx'
import DoughnutChart from '../components/Doughnut.tsx'
import Button from '../components/Button.tsx'

import ConjugEasyHome from '../assets/images/ConjugEasy_Home.png'
import ConjugEasyExercice from '../assets/images/ConjugEasy_Exercices.png'

import '../assets/styles/pages/board.scss'

export default function Board() {
    return (
        <div className="board-page">
            <div className="board-page-container-c">
                <div className="board-page-charts">
                    <h2>Progression</h2>
                    <LineChart />
                    <h2>Erreurs commises</h2>
                    <DoughnutChart />
                </div>
            </div>
            <div className="board-page-container-sb">
                <div className="board-page-squares">
                    <Square />
                </div>
                <div className="board-page-button">
                    <Link to="/personal">
                        <Button
                            color="primary"
                            text="Retour à l'espace perso"
                            img={ConjugEasyHome}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
