import Square from '../components/Square.tsx'
import '../assets/styles/pages/sequence.scss'
import Button from '../components/Button.tsx'
import { Link } from 'react-router-dom'

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
