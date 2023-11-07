import { Link } from 'react-router-dom'

import ConjugEasyTop from '../assets/images/layouts/ConjugEasy_Top.png'

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={ConjugEasyTop} alt="ConjugEasy Top" />
            </Link>
        </div>
    )
}
