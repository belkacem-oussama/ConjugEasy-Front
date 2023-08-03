import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import '../assets/styles/components/input.scss'

interface InputProps {
    isPassword?: boolean
}

export default function Input({ isPassword }: InputProps) {
    const [inputValue, setInputValue] = useState<string>('')

    return (
        <>
            <InputGroup className="input-component">
                <Form.Control
                    type={isPassword ? 'password' : 'text'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </InputGroup>
        </>
    )
}
