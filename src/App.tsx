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
import text from './assets/json/text.json'

import './assets/styles/import.scss'

//TS Interface && Type
export type InputValue = {
    Username: string
    Password: string
    Answers: string[]
}

interface LoggedUserInterface {
    id: number
    login: string
    mdp: string
    name: string
    role: string
    surname: string
}

//END Interface

export default function App() {
    const initialValues: InputValue = {
        Username: '',
        Password: '',
        Answers: ['', '', '', '', ''],
    }

    const [inputValue, setInputValue] = useState<InputValue>(initialValues)

    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [inputIndex, setInputIndex] = useState<number[]>([])

    const userRoles: string | null = localStorage.getItem('user-role')
    const logged: string | null = localStorage.getItem('isLogged')

    const location = useLocation()
    const navigate = useNavigate()

    const handleFailedAuth = (): void => {
        navigate('/login')
        setIsLoading(false)
        setErrorMessage(true)
    }

    const handleSuccessfullAuth = (): void => {
        setIsLogged(true)
        setErrorMessage(false)
        setIsLoading(false)
        localStorage.setItem('isLogged', JSON.stringify(true))
        navigate('/personal')
    }

    const handleLogin = async (): Promise<void> => {
        try {
            const login: string = inputValue.Username
            const password: string = inputValue.Password

            setIsLoading(true)

            const loggedUser: LoggedUserInterface | undefined = users.find(
                (user) => user.login === login && user.mdp === password
            )

            if (loggedUser) {
                setTimeout(() => {
                    handleSuccessfullAuth()
                }, 3000)

                const username: void = localStorage.setItem(
                    'user-name',
                    loggedUser.name
                )
                const surname: void = localStorage.setItem(
                    'user-surname',
                    loggedUser.surname
                )
                const role: void = localStorage.setItem(
                    'user-role',
                    loggedUser.role
                )
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

    const handleLogout = (): void => {
        setIsLogged(false)
        localStorage.clear()
        navigate('/bye-bye')
    }

    const handleVerbsScore = (): void => {
        let StateInputValue: string[] = inputValue.Answers
        let GoodVerbs: any = null

        const localStorageData = localStorage.getItem('goodConjug')
        if (localStorageData !== null) {
            GoodVerbs = JSON.parse(localStorageData)
        }

        if (StateInputValue.length !== GoodVerbs.length) {
            console.log("Les tableaux n'ont pas la même longueur")
            return
        }

        let positiveCounter: number = 0
        let errorVerbsInput: string[] = []
        let errorVerbs: string[] = []
        let verbsToFind: string[] = text.words

        for (let x = 0; x < StateInputValue.length; ++x) {
            if (StateInputValue[x] === GoodVerbs[x]) {
                positiveCounter++
            } else {
                errorVerbsInput.push(StateInputValue[x])
                errorVerbs.push(GoodVerbs[x])
            }
        }

        localStorage.setItem('positive-counter', positiveCounter.toString())
        console.log(errorVerbsInput, errorVerbs)
    }

    const handleFormSubmit = (): void => {
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
                            inputIndex={inputIndex}
                            setInputIndex={setInputIndex}
                        />
                    }
                />
                <Route
                    path="/result"
                    element={
                        <Result
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                        />
                    }
                />
                <Route
                    path="/board"
                    element={
                        <Board
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            inputIndex={inputIndex}
                            setInputIndex={setInputIndex}
                        />
                    }
                />
                <Route path="/bye-bye" element={<Bye />} />
            </Routes>
            <Footer />
        </React.Fragment>
    )
}
