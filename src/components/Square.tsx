import { useLocation, Link } from 'react-router-dom'

import Input from './Input.tsx'
import Button from './Button.tsx'
import Text from './Text.tsx'

import ConjugEasyLogo from '../assets/images/ConjugEasy-Login.png'
import ConjugEasyBrownBelt from '../assets/images/belts/ConjugEasy_BrownBelt.png'
import '../assets/styles/components/square.scss'
import text from '../assets/json/text.json'

export default function Square() {
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
                    <Input />
                    <Input isPassword />
                    <Link to="/personal">
                        <Button
                            color="secondary"
                            text="Connexion"
                            size="small"
                        />
                    </Link>
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
                    <div className="square-tablet-board-answers">
                        <p>Nombre de bonnes réponses : 40</p>
                        <p>Nombre de mauvaises réponses : 50</p>
                    </div>
                    <div className="square-tablet-board-belt">
                        <p>Ceinture actuelle :</p>
                        <img src={ConjugEasyBrownBelt} id="belt" />
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    )
}
