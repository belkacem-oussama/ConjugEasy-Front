import { Link } from 'react-router-dom'

import Button from '../components/Button.tsx'

import '../assets/styles/pages/start.scss'

export default function Start() {
    return (
        <div className="start-page">
            <Link to="/sequence">
                <Button color="primary" text="Prêt ?" className="d-none" />
            </Link>
        </div>
    )
}
