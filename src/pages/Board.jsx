import { Link } from 'react-router-dom'

import Square from '../components/Square.jsx'
import LineChart from '../components/Line.jsx'
import DoughnutChart from '../components/Doughnut.jsx'
import Button from '../components/Button.jsx'

import ConjugEasyHome from '../assets/images/logo/ConjugEasy_Home.png'

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
