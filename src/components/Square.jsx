import { useLocation, Link } from 'react-router-dom'

import Input from './Input.jsx'
import Button from './Button.jsx'
import Text from './Text.jsx'

import text from '../assets/json/text.json'

import ConjugEasyLogo from '../assets/images/logo/ConjugEasy-Login.png'
import ConjugEasyBlueBelt from '../assets/images/belts/ConjugEasy_BlueBelt.png'

import '../assets/styles/components/square.scss'

export default function Square({
    handleLogin,
    inputValue,
    setInputValue,
    passwordValue,
    setPasswordValue,
    errorMessage,
}) {
    const location = useLocation()
    return (
        <>
            {location.pathname === '/login' ? (
                <div className="square-component">
                    <img
                        src={ConjugEasyLogo}
                        id="login-logo"
                        alt="ConjugEasy Logo"
                    />
                    <Input
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                    <Input
                        isPassword
                        passwordValue={passwordValue}
                        setPasswordValue={setPasswordValue}
                    />
                    {errorMessage ? <p>Oups...mauvais identifiants</p> : null}
                    <Button
                        color="secondary"
                        text="Connexion"
                        size="small"
                        onClick={handleLogin}
                    />
                </div>
            ) : (
                ''
            )}
            {location.pathname === '/sequence' ? (
                <div className="square-tablet-sequence">
                    <Text />
                </div>
            ) : (
                ''
            )}
            {location.pathname === '/result' ? (
                <div className="square-tablet-result">
                    <h1>Score :</h1>
                    <h2>3/5</h2>
                    <p>{text.score}</p>
                </div>
            ) : (
                ''
            )}
            {location.pathname === '/board' ? (
                <div className="square-tablet-board">
                    <div className="square-tablet-board-introduction">
                        <p>
                            Tes résultats se sont améliorés, poursuis tes
                            efforts !
                        </p>
                        <p>
                            D'après ces derniers, tu devrais réviser en priorité
                            les verbes suivants : être, avoir, manger
                        </p>
                    </div>
                    <div className="square-tablet-board-belt">
                        <p>Prochaine ceinture :</p>
                        <img src={ConjugEasyBlueBelt} id="belt" />
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    )
}
