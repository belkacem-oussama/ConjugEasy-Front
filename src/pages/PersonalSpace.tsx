import Button from '../components/Button.tsx'
import ConjugEasyBrownBelt from '../assets/images/belts/ConjugEasy_BrownBelt.png'
import { Link } from 'react-router-dom'
import '../assets/styles/pages/personal-space.scss'
import '../assets/styles/images/belt.scss'
import { useState } from 'react'

export default function PersonalSpace() {
    const [passedExercices, setPassedExercices] = useState<number>(0)
    const [readyToExam, setReadyToExam] = useState<boolean>(false)

    const textButton: string[] = [
        'Je passe la ceinture noire',
        "Je m'entraîne",
        'Je consulte mes résultats',
        "Je m'exerce",
    ]

    return (
        <div className="personal-space-container">
            <p>Salut Amel ! Alors, que veux-tu faire aujourd'hui ? </p>
            <p>Ceinture actuelle :</p>
            <img src={ConjugEasyBrownBelt} id="belt" />
            <div className="personal-space-container-main">
                <div className="personal-space-container-main-top">
                    <Link to="/start">
                        {readyToExam ? (
                            <Button
                                color="primary"
                                text={textButton[0]}
                            ></Button>
                        ) : (
                            <Button
                                color="primary"
                                text={textButton[1]}
                            ></Button>
                        )}
                    </Link>
                    <Button color="primary" text={textButton[2]} />
                </div>
                <div className="personal-space-container-main-bottom">
                    <Button color="primary" text={textButton[3]} />
                </div>
            </div>
        </div>
    )
}
