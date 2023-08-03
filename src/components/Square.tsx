import Input from './Input.tsx'
import ConjugEasyLogo from '../assets/images/ConjugEasy-Login.png'
import Button from './Button.tsx'

import '../assets/styles/components/square.scss'

export default function Square() {
    return (
        <div className="square-component">
            <img src={ConjugEasyLogo} id="login-logo" />
            <Input />
            <Input isPassword />
            <Button color="secondary" text="Connexion" size="small" />
        </div>
    )
}
