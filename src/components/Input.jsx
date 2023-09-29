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
    index,
}) {
    const location = useLocation()
    const wordIndex = localStorage.getItem('word-index')
    const regex = /"([^"]+)"/g
    const verbes = []
    let match

    while ((match = regex.exec(wordIndex))) {
        verbes.push(match[1])
    }

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

            case '/sequence':
                const placeholderInput = e.target.placeholder
                const inputValueIndex = verbes.indexOf(placeholderInput)

                if (inputValueIndex !== -1) {
                    setInputValue((prevInputValue) => {
                        const updatedAnswers = [...prevInputValue.Answers]
                        updatedAnswers[inputValueIndex] = e.target.value
                        return {
                            ...prevInputValue,
                            Answers: updatedAnswers,
                        }
                    })
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
                    <span className="input-component-sequence" index={index}>
                        <Form.Control
                            type="text"
                            placeholder={placeholderValue}
                            value={inputValue.Answers[index]}
                            onChange={HandleChangeInput}
                        />
                    </span>
                </>
            )}
        </>
    )
}
