import { useLocation } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import '../assets/styles/components/input.scss'

export default function Input({
    inputValue,
    setInputValue,
    passwordValue,
    setPasswordValue,
    isPassword,
    placeholderValue,
    errorMessage,
    setErrorMessage,
}) {
    const location = useLocation()

    const HandleChangeInput = (e) => {
        errorMessage ? setErrorMessage(false) : null

        isPassword
            ? setPasswordValue(e.target.value)
            : setInputValue(e.target.value)
    }

    return (
        <>
            {location.pathname === '/login' && (
                <>
                    {isPassword ? 'Mot de passe' : 'Identifiant'}
                    <InputGroup className="input-component-login">
                        <Form.Control
                            type={isPassword ? 'password' : 'text'}
                            placeholder={isPassword ? 'Password' : 'Username'}
                            value={isPassword ? passwordValue : inputValue}
                            onChange={HandleChangeInput}
                        />
                    </InputGroup>
                </>
            )}

            {location.pathname === '/sequence' && (
                <>
                    <span className="input-component-sequence">
                        <Form.Control
                            type="text"
                            placeholder={placeholderValue}
                            value={isPassword ? passwordValue : inputValue}
                            onChange={HandleChangeInput}
                        />
                    </span>
                </>
            )}
        </>
    )
}
