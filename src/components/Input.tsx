import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

interface InputProps {
    isUser: string
}

export default function Input({ isUser }: InputProps) {
    const [userValue, setUserValue] = useState<string>(isUser)

    return (
        <>
            <InputGroup className="mb-3">
                {isUser === 'Identifiant' && (
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                )}
                <Form.Control
                    placeholder={isUser}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={userValue}
                    onChange={(e) => setUserValue(e.target.value)}
                />
            </InputGroup>
        </>
    )
}
