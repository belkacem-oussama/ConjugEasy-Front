import Input from './Input.tsx'
import ConjugEasyLogo from '../assets/images/ConjugEasy-Login.png'

import '../assets/styles/components/square.scss'

export default function Square() {
    return (
        <div className="square-component">
            <img src={ConjugEasyLogo} id="login-logo" />
            <Input />
            <Input isPassword />
        </div>
    )
}
