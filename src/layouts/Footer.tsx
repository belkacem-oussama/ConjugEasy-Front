import { useLocation } from 'react-router-dom'

import ConjugEasyFooter from '../assets/images/layouts/ConjugEasy_Bag.png'

export default function Footer() {
    const location = useLocation()
    return (
        <>
            {location.pathname === '/board' ? (
                <div className="footer-relative">
                    <img src={ConjugEasyFooter} />
                </div>
            ) : (
                <div className="footer">
                    <img src={ConjugEasyFooter} />
                </div>
            )}
        </>
    )
}
