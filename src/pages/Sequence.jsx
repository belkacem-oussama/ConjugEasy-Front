import { Link } from 'react-router-dom'

import Square from '../components/Square.jsx'
import Button from '../components/Button.jsx'

import '../assets/styles/pages/sequence.scss'

export default function Sequence() {
    return (
        <div className="sequence-container">
            <div className="sequence-container-page">
                <Square />
            </div>
            <Link to="/result">
                <Button color="primary" text="J'ai fini !" />
            </Link>
        </div>
    )
}