import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import '../assets/styles/components/input.scss'

interface InputProps {
    isPassword?: boolean
    placeholderValue?: string
}

export default function Input({ isPassword, placeholderValue }: InputProps) {
    const [inputValue, setInputValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const location = useLocation()

    const HandleChangeInput = (e: any) => {
        isPassword
            ? setPasswordValue(e.target.value)
            : setInputValue(e.target.value)

        if (isPassword) {
            localStorage.setItem('password', e.target.value)
        } else {
            localStorage.setItem('input-value', e.target.value)
        }
    }

    return (
        <>
            {location.pathname === '/login' ? (
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
            ) : (
                ''
            )}
            {location.pathname === '/sequence' ? (
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
            ) : (
                ''
            )}
        </>
    )
}
