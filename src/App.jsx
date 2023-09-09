import { Route, Routes, useLocation } from 'react-router-dom'
import React, { useState } from 'react'

import Home from './pages/Home.jsx'
import Footer from './layouts/Footer.jsx'
import Header from './layouts/Header.jsx'
import Login from './pages/Login.jsx'
import PersonalSpace from './pages/PersonalSpace.jsx'
import Start from './pages/Start.jsx'
import Sequence from './pages/Sequence.jsx'
import Result from './pages/Result.jsx'
import Board from './pages/Board.jsx'
import Bye from './pages/Bye.jsx'
import Add from './pages/Add.jsx'

import './assets/styles/main.scss'

export default function App() {
    const [inputValue, setInputValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [isLogged, setIsLogged] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const location = useLocation()

    return (
        <React.Fragment>
            {location.pathname !== '/' && location.pathname !== '/login' && (
                <Header />
            )}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        <Login
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            passwordValue={passwordValue}
                            setPasswordValue={setPasswordValue}
                            isLogged={isLogged}
                            setIsLogged={setIsLogged}
                            errorMessage={errorMessage}
                            setErrorMessage={setErrorMessage}
                        />
                    }
                />
                {isLogged && (
                    <Route
                        path="/personal"
                        element={
                            <PersonalSpace
                                isLogged={isLogged}
                                setIsLogged={setIsLogged}
                            />
                        }
                    />
                )}
                <Route path="/personal/add" element={<Add />} />
                <Route path="/start" element={<Start />} />
                <Route path="/sequence" element={<Sequence />} />
                <Route path="/result" element={<Result />} />
                <Route path="/board" element={<Board />} />
                <Route path="/bye-bye" element={<Bye />} />
            </Routes>
            <Footer />
        </React.Fragment>
    )
}
