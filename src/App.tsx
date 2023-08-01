import { Route, Routes } from 'react-router-dom'
import React from 'react'

import Home from './pages/Home.tsx'
import Footer from './layouts/Footer.tsx'

import './assets/styles/main.scss'

export default function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </React.Fragment>
    )
}
