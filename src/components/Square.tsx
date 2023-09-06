import { useLocation, Link } from 'react-router-dom'
import Input from './Input.tsx'
import ConjugEasyLogo from '../assets/images/ConjugEasy-Login.png'
import Button from './Button.tsx'
import '../assets/styles/components/square.scss'
import Text from './Text.tsx'

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
                    <p>
                        <Text />
                    </p>
                </div>
            ) : (
                ''
            )}
            {location.pathname === '/result' ? (
<<<<<<< HEAD
                <div className="square-tablet-result">
                    <h1>Score :</h1>
                    <h1>3/5</h1>
                    <p>{text.score}</p>
                </div>
=======
                <div className="square-tablet"></div>
>>>>>>> f46f61e (add styles for result page & button component)
            ) : (
                ''
            )}
        </>
    )
}
