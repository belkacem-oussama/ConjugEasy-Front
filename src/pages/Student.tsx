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

import { UserInterface } from './PersonalSpace.js'

export default function Student({ handleLogout }: UserInterface) {
    const [passedExercices, setPassedExercices] = useState<number>(0)
    const [readyToExam, setReadyToExam] = useState<boolean>(false)
    const [currentBelt, setCurrentBelt] = useState<string>('WhiteBelt')

    const textButton: string[] = [
        'Je passe la ceinture noire',
        "Je m'entraîne",
        'Je consulte mes résultats',
        "Je m'exerce",
        'Se déconnecter',
    ]

    const beltOrder: { [key: number]: string } = {
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

    const userName: string | null = localStorage.getItem('user-name')
    const userSurname: string | null = localStorage.getItem('user-surname')

    localStorage.setItem('current-belt', currentBelt)
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
