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
                <Button
                    color="secondary"
                    text="Retour à l'accueil"
                    img={ConjugEasyHome}
                />
            </div>
        </div>
    )
}
