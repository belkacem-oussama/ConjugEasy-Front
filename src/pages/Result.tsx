import { Link } from 'react-router-dom'
import { useState } from 'react'

import Button from '../components/Button.tsx'
import Square from '../components/Square.tsx'

import '../assets/styles/pages/result.scss'
import ConjugEasyExercice from '../assets/images/ConjugEasy_Exercices.png'
import ConjugEasyHome from '../assets/images/ConjugEasy_Home.png'

export default function Result() {
    const [readyForTest, setReadyForTest] = useState(false)

    return (
        <div className="result-container">
            <div className="result-container-page">
                <Square />
            </div>
            <div className="result-container-button">
                <Link to="/train">
                    <Button
                        color="primary"
                        text="Je m'exerce !"
                        img={ConjugEasyExercice}
                    />
                </Link>
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
    )
}
