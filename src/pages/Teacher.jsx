import { Link } from 'react-router-dom'

import Button from '../components/Button.jsx'

import ConjugEasyBlackBelt from '../assets/images/belts/ConjugEasy_BlackBelt.png'
import ConjugEasyResult from '../assets/images/logo/ConjugEasy_Result.png'
import ConjugEasyPen from '../assets/images/logo/ConjugEasy_Pen.png'
import ConjugEasyLogout from '../assets/images/logo/ConjugEasy_Logout.png'

export default function Teacher({ handleLogout }) {
    const textButton = [
        "J'ajoute des exercices",
        'Résultats élèves',
        'Je modifie un exercice',
        'Se déconnecter',
    ]

    const userSurname = localStorage.getItem('user-surname')
    return (
        <div className="personal-space-container">
            <p>
                Bonjour Madame {userSurname} que souhaitez-vous faire
                aujourd'hui ? ?
            </p>
            <div className="personal-space-container-main">
                <div className="personal-space-container-main-top">
                    <Link to="/personal/add">
                        <Button
                            color="primary"
                            text={textButton[0]}
                            img={ConjugEasyBlackBelt}
                        />
                    </Link>
                    <Link to="/board">
                        <Button
                            color="primary"
                            text={textButton[1]}
                            img={ConjugEasyResult}
                        />
                    </Link>
                </div>
                <div className="personal-space-container-main-bottom">
                    <Button
                        color="primary"
                        text={textButton[2]}
                        img={ConjugEasyPen}
                    />
                    <Button
                        color="primary"
                        text={textButton[3]}
                        img={ConjugEasyLogout}
                        onClick={handleLogout}
                    />
                </div>
            </div>
        </div>
    )
}
