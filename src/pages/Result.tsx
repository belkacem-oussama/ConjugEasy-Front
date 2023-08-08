import { Link } from 'react-router-dom'
import '../assets/styles/pages/result.scss'
import Button from '../components/Button.tsx'
import Square from '../components/Square.tsx'

export default function Result() {
    return (
        <div className="result-container">
            <div className="result-container-page">
                <Square />
            </div>
            <div className="result-container-button">
                <Link to="/train">
                    <Button color="primary" text="Je m'exerce !" />
                </Link>
                <Link to="/personal">
                    <Button color="primary" text="Retour à l'espace perso" />
                </Link>
            </div>
        </div>
    )
}
