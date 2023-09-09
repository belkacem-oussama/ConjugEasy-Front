import { Link } from 'react-router-dom'
import { useState } from 'react'

import Button from '../components/Button.jsx'
import Square from '../components/Square.jsx'

import ConjugEasyExercice from '../assets/images/ConjugEasy_Exercices.png'
import ConjugEasyHome from '../assets/images/ConjugEasy_Home.png'
import ConjugEasyResult from '../assets/images/ConjugEasy_Result.png'

import '../assets/styles/pages/result.scss'

export default function Result() {
    const [readyForTest, setReadyForTest] = useState(false)

    const textButton = [
        "Je m'exerce",
        'Je consulte mes résultats',
        "Retour à l'espace perso",
        'Passer la ceinture noire',
    ]

    return (
        <div className="result">
            <div className="result-container">
                <div className="result-container-page">
                    <Square />
                </div>
                <div className="result-container-button">
                    <div className="result-container-button-top">
                        <Link to="/train">
                            <Button
                                color="primary"
                                text={textButton[0]}
                                img={ConjugEasyExercice}
                            />
                        </Link>
                        <Link to="/board">
                            <Button
                                color="primary"
                                text={textButton[1]}
                                img={ConjugEasyResult}
                            />
                        </Link>
                    </div>
                    <div className="result-container-button-bottom">
                        {readyForTest ? (
                            <Link to="/test">
                                <Button color="primary" text={textButton[3]} />
                            </Link>
                        ) : (
                            <Link to="/personal">
                                <Button
                                    color="primary"
                                    text={textButton[2]}
                                    img={ConjugEasyHome}
                                />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
