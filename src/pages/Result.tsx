import { Link } from 'react-router-dom'
import { useState } from 'react'

import Button from '../components/Button.tsx'
import Square from '../components/Square.tsx'

import ConjugEasyExercice from '../assets/images/ConjugEasy_Exercices.png'
import ConjugEasyHome from '../assets/images/ConjugEasy_Home.png'
import ConjugEasyResult from '../assets/images/ConjugEasy_Result.png'

import '../assets/styles/pages/result.scss'

export default function Result() {
    const [readyForTest, setReadyForTest] = useState<boolean>(false)

    return (
        <div className="result-container">
            <div className="result-container-page">
                <Square />
            </div>
            <div className="result-container-button">
                <div className="result-container-button-top">
                    <Link to="/train">
                        <Button
                            color="primary"
                            text="Je m'exerce !"
                            img={ConjugEasyExercice}
                        />
                    </Link>
                    <Link to="/board">
                        <Button
                            color="primary"
                            text="Je consulte mes résultats !"
                            img={ConjugEasyResult}
                        />
                    </Link>
                </div>
                <div className="result-container-button-bottom">
                    {readyForTest ? (
                        <Link to="/test">
                            <Button
                                color="primary"
                                text="Passer la ceinture noire"
                            />
                        </Link>
                    ) : (
                        <Link to="/personal">
                            <Button
                                color="primary"
                                text="Retour à l'espace perso"
                                img={ConjugEasyHome}
                            />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
