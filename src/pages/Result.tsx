import { Link } from 'react-router-dom'
import '../assets/styles/pages/result.scss'
import Button from '../components/Button.tsx'
import Square from '../components/Square.tsx'
import { useState } from 'react'

export default function Result() {
    const [readyForTest, setReadyForTest] = useState(false)

    return (
        <div className="result-container">
            <div className="result-container-page">
                <Square />
            </div>
            <div className="result-container-button">
                <Link to="/train">
                    <Button color="primary" text="Je m'exerce !" />
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
                        />
                    </Link>
                )}
            </div>
        </div>
    )
}
