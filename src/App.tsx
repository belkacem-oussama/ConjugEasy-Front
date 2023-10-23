import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

import Home from './pages/Home.js'
import Footer from './layouts/Footer.js'
import Header from './layouts/Header.js'
import Login from './pages/Login.js'
import PersonalSpace from './pages/PersonalSpace.js'
import Start from './pages/Start.js'
import Sequence from './pages/Sequence.js'
import Result from './pages/Result.js'
import Board from './pages/Board.js'
import Bye from './pages/Bye.js'
import Add from './pages/Add.js'

import users from './assets/json/user.json'

import './assets/styles/import.scss'

export default function App() {
    const initialValues = {
        Username: '',
        Password: '',
        Answers: ['', '', '', '', ''],
    }

    const [inputValue, setInputValue] = useState(initialValues)
    const [isLogged, setIsLogged] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const userRoles = localStorage.getItem('user-role')
    const logged = localStorage.getItem('isLogged')

    const location = useLocation()
    const navigate = useNavigate()

    const handleFailedAuth = () => {
        navigate('/login')
        setIsLoading(false)
        setErrorMessage(true)
    }

    const handleSuccessfullAuth = () => {
        setIsLogged(true)
        setErrorMessage(false)
        setIsLoading(false)
        localStorage.setItem('isLogged', JSON.stringify(true))
        navigate('/personal')
    }

    const handleLogin = async () => {
        try {
            const login = inputValue.Username
            const password = inputValue.Password

            setIsLoading(true)

            const loggedUser = users.find(
                (user) => user.login === login && user.mdp === password
            )

            if (loggedUser) {
                setTimeout(() => {
                    handleSuccessfullAuth()
                }, 3000)

                const username = localStorage.setItem(
                    'user-name',
                    loggedUser.name
                )
                const surname = localStorage.setItem(
                    'user-surname',
                    loggedUser.surname
                )
                const role = localStorage.setItem('user-role', loggedUser.role)
            } else {
                handleFailedAuth()
            }
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des données utilisateur :',
                error
            )
        }
    }

    const handleLogout = () => {
        setIsLogged(false)
        localStorage.clear()
        navigate('/bye-bye')
    }

    const handleVerbsScore = () => {
        let StateInputValue = inputValue.Answers
        let GoodVerbs = JSON.parse(localStorage.getItem('goodConjug'))

        if (StateInputValue.length !== GoodVerbs.length) {
            console.log("Les tableaux n'ont pas la même longueur")
            return
        }

        let positiveCounter = 0
        let errorVerbsInput = []
        let errorVerbs = []

        for (let x = 0; x < StateInputValue.length; ++x) {
            if (StateInputValue[x] === GoodVerbs[x]) {
                positiveCounter++
            } else {
                errorVerbsInput.push(StateInputValue[x])
                errorVerbs.push(GoodVerbs[x])
            }
        }
        localStorage.setItem('positive-counter', positiveCounter)
    }

    const handleFormSubmit = () => {
        switch (location.pathname) {
            case '/sequence':
                handleVerbsScore()
                break

            default:
        }
    }

    return (
        <React.Fragment>
            {location.pathname !== '/' && location.pathname !== '/login' && (
                <Header />
            )}
            <Routes>
                <Route
                    path="/"
                    element={<Home handleLogout={handleLogout} />}
                />
                <Route
                    path="/login"
                    element={
                        <Login
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            isLogged={isLogged}
                            setIsLogged={setIsLogged}
                            errorMessage={errorMessage}
                            setErrorMessage={setErrorMessage}
                            handleLogin={handleLogin}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                        />
                    }
                />
                {logged && (
                    <Route
                        path="/personal"
                        element={
                            <PersonalSpace
                                isLogged={isLogged}
                                handleLogout={handleLogout}
                                setIsLogged={setIsLogged}
                            />
                        }
                    />
                )}
                {logged && userRoles === 'teacher' && (
                    <Route path="/personal/add" element={<Add />} />
                )}
                <Route path="/start" element={<Start />} />
                <Route
                    path="/sequence"
                    element={
                        <Sequence
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            handleFormSubmit={handleFormSubmit}
                        />
                    }
                />
                <Route path="/result" element={<Result />} />
                <Route path="/board" element={<Board />} />
                <Route path="/bye-bye" element={<Bye />} />
            </Routes>
            <Footer />
        </React.Fragment>
    )
}
