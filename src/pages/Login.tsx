import '../assets/styles/pages/login.scss'
import Square from '../components/Square.tsx'
import ConjugEasyLogo from '../assets/images/ConjugEasy.png'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login-container">
            <Link to="/">
                <img src={ConjugEasyLogo} id="login-container-page-image" />
            </Link>
            <div className="login-container-page">
                <Square />
            </div>
        </div>
    )
}
