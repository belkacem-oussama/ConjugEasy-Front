import { Link } from 'react-router-dom'

import Button from '../components/Button.jsx'

import ConjugEasyBye from '../assets/images/bye/ConjugEasy_Bye.png'
import ConjugEasyHome from '../assets/images/home/ConjugEasy_Cahier.png'

import '../assets/styles/pages/bye.scss'

export default function Bye() {
    return (
        <div className="bye-page">
            <div className="bye-page-container">
                <h1>Ohh ! Il est déjà 16h30 ? Salut! </h1>
                <img src={ConjugEasyBye} />
                <Link to="/">
                    <Button
                        color="secondary"
                        text="Retour à l'accueil"
                        img={ConjugEasyHome}
                    />
                </Link>
            </div>
        </div>
    )
}
