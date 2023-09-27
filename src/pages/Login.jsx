import { Link } from 'react-router-dom'

import Square from '../components/Square.jsx'

import ConjugEasyLogo from '../assets/images/home/ConjugEasy.png'

import '../assets/styles/pages/login.scss'

export default function Login({
    inputValue,
    setInputValue,
    passwordValue,
    setPasswordValue,
    handleLogin,
    errorMessage,
}) {
    return (
        <div className="login-container">
            <Link to="/">
                <img src={ConjugEasyLogo} id="login-container-page-image" />
            </Link>
            <div className="login-container-page">
                <Square
                    errorMessage={errorMessage}
                    handleLogin={handleLogin}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    passwordValue={passwordValue}
                    setPasswordValue={setPasswordValue}
                />
            </div>
        </div>
    )
}
