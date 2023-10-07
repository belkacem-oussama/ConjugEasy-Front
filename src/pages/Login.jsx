import { Link } from 'react-router-dom'

import Square from '../components/Square.jsx'

import ConjugEasyLogo from '../assets/images/home/ConjugEasy.png'

export default function Login({
    inputValue,
    setInputValue,
    handleLogin,
    errorMessage,
    setErrorMessage,
    isLoading,
    setIsLoading,
}) {
    return (
        <div className="login-container">
            <Link to="/">
                <img src={ConjugEasyLogo} id="login-container-page-image" />
            </Link>
            <div className="login-container-page">
                <Square
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                    handleLogin={handleLogin}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            </div>
        </div>
    )
}
