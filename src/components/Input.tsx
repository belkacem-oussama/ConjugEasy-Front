import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import '../assets/styles/components/input.scss'

interface InputProps {
    isUser?: string
}

export default function Input({ isUser }: InputProps) {
    const [userValue, setUserValue] = useState<string>(isUser || '')

    return (
        <>
            <InputGroup className="input-component">
                <Form.Control
                    type="text"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={userValue}
                    onChange={(e) => setUserValue(e.target.value)}
                />
            </InputGroup>
        </>
    )
}
