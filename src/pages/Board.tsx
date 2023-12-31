import { Link } from 'react-router-dom'

import Square from '../components/Square.js'
import LineChart from '../components/Line.js'
import DoughnutChart from '../components/Doughnut.js'
import Button from '../components/Button.js'

import ConjugEasyHome from '../assets/images/logo/ConjugEasy_Home.png'

import { InputValue } from '../App.js'

interface BoardInterface {
    inputValue: InputValue
    setInputValue: (newInputValue: InputValue) => void
}

export default function Board({ inputValue, setInputValue }: BoardInterface) {
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
                    <Square
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
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
