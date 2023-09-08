import ConjugEasyFooter from '../assets/images/ConjugEasy_Bag.png'
import { useLocation } from 'react-router-dom'

import '../assets/styles/layouts/footer.scss'

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
