import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button.js'

//IMPORT PICS
import ConjugEasyExercice from '../assets/images/logo/ConjugEasy_Exercices.png'
import ConjugEasyResult from '../assets/images/logo/ConjugEasy_Result.png'
import ConjugEasyLogout from '../assets/images/logo/ConjugEasy_Logout.png'
import ConjugEasyTraining from '../assets/images/logo/ConjugEasy_Training.png'

//IMPORT BELTS
import ConjugEasyBlackBelt from '../assets/images/belts/ConjugEasy_BlackBelt.png'
import ConjugEasyBrownBelt from '../assets/images/belts/ConjugEasy_BrownBelt.png'
import ConjugEasyPurpleBelt from '../assets/images/belts/ConjugEasy_PurpleBelt.png'
import ConjugEasyBlueBelt from '../assets/images/belts/ConjugEasy_BlueBelt.png'
import ConjugEasyWhiteBelt from '../assets/images/belts/ConjugEasy_WhiteBelt.png'

export default function Student({ handleLogout }) {
    const [passedExercices, setPassedExercices] = useState(0)
    const [readyToExam, setReadyToExam] = useState(false)
    const [currentBelt, setCurrentBelt] = useState('WhiteBelt')

    const textButton = [
        'Je passe la ceinture noire',
        "Je m'entraîne",
        'Je consulte mes résultats',
        "Je m'exerce",
        'Se déconnecter',
    ]

    const beltOrder = {
        1: 'White',
        2: 'Blue',
        3: 'Purple',
        4: 'Brown',
        5: 'Black',
    }

    let beltToDisplay = ''

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

    const userName = localStorage.getItem('user-name')
    const userSurname = localStorage.getItem('user-surname')

    return (
        <div className="personal-space-container">
            <p>
                Salut {userName} {userSurname} ! Alors, que veux-tu faire
                aujourd'hui ?
            </p>
            <p>Ceinture actuelle :</p>
            <img src={beltToDisplay} id="belt" />
            <div className="personal-space-container-main">
                <div className="personal-space-container-main-top">
                    <Link to="/start">
                        <Button
                            color="primary"
                            text={readyToExam ? textButton[0] : textButton[1]}
                            img={readyToExam ? undefined : ConjugEasyTraining}
                        />
                    </Link>
                    <Link to="/board">
                        <Button
                            color="primary"
                            text={textButton[2]}
                            img={ConjugEasyResult}
                        />
                    </Link>
                </div>
                <div className="personal-space-container-main-bottom">
                    <Button
                        color="primary"
                        text={textButton[3]}
                        img={ConjugEasyExercice}
                    />
                    <Button
                        color="primary"
                        text={textButton[4]}
                        img={ConjugEasyLogout}
                        onClick={handleLogout}
                    />
                </div>
            </div>
        </div>
    )
}