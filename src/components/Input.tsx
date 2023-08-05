import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import '../assets/styles/components/input.scss'

interface InputProps {
    isPassword?: boolean
}

export default function Input({ isPassword }: InputProps) {
    const [inputValue, setInputValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')

    const HandleChangeInput = (e: any) => {
        isPassword
            ? setPasswordValue(e.target.value)
            : setInputValue(e.target.value)
        if (isPassword) {
            localStorage.setItem('password', e.target.value)
        } else {
            localStorage.setItem('username', e.target.value)
        }
    }

    const HandleSubmitInput = () => {
        console.log('ok')
    }

    return (
        <>
            {isPassword ? 'Mot de passe' : 'Identifiant'}
            <InputGroup className="input-component">
                <Form.Control
                    type={isPassword ? 'password' : 'text'}
                    placeholder={isPassword ? 'Password' : 'Username'}
                    value={isPassword ? passwordValue : inputValue}
                    onChange={HandleChangeInput}
                    onSubmit={HandleSubmitInput}
                />
            </InputGroup>
        </>
    )
}
