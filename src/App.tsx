import { Route, Routes, useLocation } from 'react-router-dom'
import React, { useState } from 'react'

import Home from './pages/Home.tsx'
import Footer from './layouts/Footer.tsx'
import Header from './layouts/Header.tsx'
import Login from './pages/Login.tsx'
import PersonalSpace from './pages/PersonalSpace.tsx'
import Start from './pages/Start.tsx'
import Sequence from './pages/Sequence.tsx'
import Result from './pages/Result.tsx'
import Board from './pages/Board.tsx'

import './assets/styles/main.scss'

import user from './assets/json/user.json'

export default function App() {
    const [userRole, setUserRole] = useState<string>('teacher')

    const location = useLocation()

    return (
        <React.Fragment>
            {location.pathname !== '/' && location.pathname !== '/login' && (
                <Header />
            )}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/personal"
                    element={<PersonalSpace userRole={userRole} />}
                />
                <Route path="/start" element={<Start />} />
                <Route path="/sequence" element={<Sequence />} />
                <Route path="/result" element={<Result />} />
                <Route path="/board" element={<Board />} />
            </Routes>
            <Footer />
        </React.Fragment>
    )
}
