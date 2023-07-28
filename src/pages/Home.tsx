import Button from '../components/Button.tsx'

import ConjugEasyTitle from '.././assets/images/ConjugEasy.png'
import ConjugEasyNotes from '.././assets/images/ConjugEasy_Notes.png'
import ConjugEasyBag from '.././assets/images/ConjugEasy_Bag.png'

import '.././assets/styles/pages/home.scss'

export default function Home() {
    const firstTwoButtonsText: String[] = ['Élève', 'Professeur']
    const firstTwoButtons = firstTwoButtonsText.map((label, index) => (
        <Button key={index} size="small" color="primary">
            {label}
        </Button>
    ))

    const thirdButtonText = 'Visiteur'
    const thirdButton = (
        <Button size="small" color="primary">
            {thirdButtonText}
        </Button>
    )

    return (
        <div className="home">
            <img src={ConjugEasyTitle} alt="ConjugEasy Title" />
            <div className="home-buttons-top">{firstTwoButtons}</div>
            <div className="home-button-bottom">{thirdButton}</div>
            <img src={ConjugEasyNotes} alt="ConjugEasy Notes" />
            <img src={ConjugEasyBag} alt="ConjugEasy Bag" />
        </div>
    )
}
