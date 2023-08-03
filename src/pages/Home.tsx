import Button from '../components/Button.tsx'
import { Link } from 'react-router-dom'

import ConjugEasyTitle from '.././assets/images/ConjugEasy.png'
import ConjugEasyCahier from '.././assets/images/ConjugEasy_Cahier.png'

import '.././assets/styles/pages/home.scss'

export default function Home() {
    const firstTwoButtonsText: string[] = ['Élève', 'Professeur']
    const firstTwoButtons = firstTwoButtonsText.map((label, index) => (
        <Button key={index} color="primary" text={label}></Button>
    ))

    const thirdButtonText = 'Visiteur'
    const thirdButton = <Button color="primary" text={thirdButtonText}></Button>

    return (
        <div className="home">
            <img src={ConjugEasyTitle} alt="ConjugEasy Title" id="title" />
            <div className="home-buttons">
                <div className="home-buttons-img-container">
                    <img src={ConjugEasyCahier} alt="ConjugEasy Notes" />
                </div>
                <div className="home-buttons-container">
                    <Link to="/login">
                        <div className="home-buttons-top">
                            {firstTwoButtons}
                        </div>
                    </Link>
                    <div className="home-buttons-bottom">{thirdButton}</div>
                </div>
            </div>
        </div>
    )
}
