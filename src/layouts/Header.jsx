import { Link } from 'react-router-dom'

import ConjugEasyTop from '../assets/images/ConjugEasy_Top.png'

import '../assets/styles/layouts/header.scss'

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={ConjugEasyTop} alt="ConjugEasy Top" />
            </Link>
        </div>
    )
}
