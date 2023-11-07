import React from 'react'
import { Link } from 'react-router-dom'

import Square from '../components/Square.js'

import ConjugEasyLogo from '../assets/images/home/ConjugEasy.png'

import { InputValue } from '../App.js'

interface LoginInterface {
    inputValue: InputValue
    setInputValue: (value: any) => void
    handleLogin: () => void
    errorMessage: boolean
    setErrorMessage: (value: boolean) => void
    isLoading: boolean
    setIsLoading: (value: boolean) => void
}

export default function Login({
    inputValue,
    setInputValue,
    handleLogin,
    errorMessage,
    setErrorMessage,
    isLoading,
    setIsLoading,
}: LoginInterface) {
    return (
        <div className="login-container">
            <Link to="/">
                <img src={ConjugEasyLogo} id="login-container-page-image" />
            </Link>
            <div className="login-container-page">
                <Square
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                    handleLogin={handleLogin}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            </div>
        </div>
    )
}
