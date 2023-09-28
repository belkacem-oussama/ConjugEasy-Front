import { useLocation } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import '../assets/styles/components/input.scss'

export default function Input({
    inputValue,
    setInputValue,
    isPassword,
    placeholderValue,
    errorMessage,
    setErrorMessage,
}) {
    const location = useLocation()

    const HandleChangeInput = (e) => {
        errorMessage ? setErrorMessage(false) : null
        const { value } = e.target

        switch (location.pathname) {
            case '/login':
                if (isPassword) {
                    setInputValue((prevInputValue) => ({
                        ...prevInputValue,
                        Password: value,
                    }))
                } else {
                    setInputValue((prevInputValue) => ({
                        ...prevInputValue,
                        Username: value,
                    }))
                }
                break
            default:
        }
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
                            value={
                                isPassword
                                    ? inputValue.Password
                                    : inputValue.Username
                            }
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
