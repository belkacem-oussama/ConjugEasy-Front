import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Square from '../components/Square.jsx'

import ConjugEasyLogo from '../assets/images/home/ConjugEasy.png'

import users from '../assets/json/user.json'

import '../assets/styles/pages/login.scss'

export default function Login({
    inputValue,
    setInputValue,
    passwordValue,
    setPasswordValue,
    isLogged,
    setIsLogged,
    errorMessage,
    setErrorMessage,
}) {
    const navigate = useNavigate()

    const handleSuccessfullAuth = () => {
        setIsLogged(true)
        setErrorMessage(false)
        localStorage.setItem('isLogged', { isLogged })
        navigate('/personal')
    }

    const handleFailedAuth = () => {
        navigate('/login')
        setErrorMessage(true)
    }

    const handleLogin = async () => {
        try {
            const login = inputValue
            const password = passwordValue

            const loggedUser = users.find(
                (user) => user.login === login && user.mdp === password
            )

            if (loggedUser) {
                handleSuccessfullAuth()

                const username = localStorage.setItem(
                    'user-name',
                    loggedUser.name
                )
                const surname = localStorage.setItem(
                    'user-surname',
                    loggedUser.surname
                )
                const role = localStorage.setItem('user-role', loggedUser.role)
            } else {
                handleFailedAuth()
            }
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des données utilisateur :',
                error
            )
        }
    }

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
