import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button.tsx'

import ConjugEasyBlackBelt from '../assets/images/belts/ConjugEasy_BlackBelt.png'
import ConjugEasyBrownBelt from '../assets/images/belts/ConjugEasy_BrownBelt.png'
import ConjugEasyPurpleBelt from '../assets/images/belts/ConjugEasy_PurpleBelt.png'
import ConjugEasyBlueBelt from '../assets/images/belts/ConjugEasy_BlueBelt.png'
import ConjugEasyWhiteBelt from '../assets/images/belts/ConjugEasy_WhiteBelt.png'

import '../assets/styles/pages/personal-space.scss'
import '../assets/styles/images/belt.scss'

export default function PersonalSpace() {
    const [passedExercices, setPassedExercices] = useState<number>(0)
    const [readyToExam, setReadyToExam] = useState<boolean>(false)
    const [currentBelt, setCurrentBelt] = useState<string>('WhiteBelt')

    const textButton: string[] = [
        'Je passe la ceinture noire',
        "Je m'entraîne",
        'Je consulte mes résultats',
        "Je m'exerce",
        'Se deconnecter',
    ]

    const beltOrder: object = {
        1: 'White',
        2: 'Blue',
        3: 'Purple',
        4: 'Brown',
        5: 'Black',
    }

    let beltToDisplay: string = ''

    switch (currentBelt) {
        case 'WhiteBelt':
            beltToDisplay = ConjugEasyWhiteBelt
            break
        case 'BlueBelt':
            beltToDisplay = ConjugEasyBlueBelt
            break
        case 'PurpleBelt':
            beltToDisplay = ConjugEasyPurpleBelt
            break
        case 'BrownBelt':
            beltToDisplay = ConjugEasyBrownBelt
            break
        case 'BlackBelt':
            beltToDisplay = ConjugEasyBlackBelt
            break
        default:
            break
    }

    return (
        <div className="personal-space-container">
            <p>Salut Amel ! Alors, que veux-tu faire aujourd'hui ? </p>
            <p>Ceinture actuelle :</p>
            <img src={beltToDisplay} id="belt" />
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
                    <Button color="primary" text={textButton[4]} />
                </div>
            </div>
        </div>
    )
}
