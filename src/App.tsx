import { Route, Routes, useLocation } from 'react-router-dom'
import React from 'react'

import Home from './pages/Home.tsx'
import Footer from './layouts/Footer.tsx'
import Header from './layouts/Header.tsx'

import './assets/styles/main.scss'
import Login from './pages/Login.tsx'
import PersonalSpace from './pages/PersonalSpace.tsx'
import Start from './pages/Start.tsx'

export default function App() {
    const location = useLocation()

    return (
        <React.Fragment>
            {location.pathname !== '/' && location.pathname !== '/login' && (
                <Header />
            )}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/personal" element={<PersonalSpace />} />
                <Route path="/start" element={<Start />} />
            </Routes>
            <Footer />
        </React.Fragment>
    )
}
