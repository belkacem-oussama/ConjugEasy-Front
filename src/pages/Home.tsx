import { Link } from 'react-router-dom'

import Button from '../components/Button.js'

import ConjugEasyTitle from '.././assets/images/home/ConjugEasy.png'
import ConjugEasyCahier from '.././assets/images/home/ConjugEasy_Cahier.png'

interface HomeInterface {
    handleLogout: () => void
}

export default function Home({ handleLogout }: HomeInterface) {
    const ButtonsText: string[] = [
        'Élève',
        'Professeur',
        'Visiteur',
        'Espace personel',
        'Se déconnecter',
    ]

    const isLogged: string | null = localStorage.getItem('isLogged')

    return (
        <div className="home">
            <img src={ConjugEasyTitle} alt="ConjugEasy Title" id="title" />
            <div className="home-buttons">
                <div className="home-buttons-img-container">
                    <img src={ConjugEasyCahier} alt="ConjugEasy Notes" />
                </div>
                {!isLogged ? (
                    <div className="home-buttons-container">
                        <Link to="/login">
                            <div className="home-buttons-top">
                                <Button
                                    color="primary"
                                    text={ButtonsText[0]}
                                ></Button>
                                <Button
                                    color="primary"
                                    text={ButtonsText[1]}
                                ></Button>
                            </div>
                        </Link>
                        <div className="home-buttons-bottom">
                            <Button
                                color="primary"
                                text={ButtonsText[2]}
                            ></Button>
                        </div>
                    </div>
                ) : (
                    <>
                        <Link to="/personal">
                            <Button
                                color="primary"
                                text={ButtonsText[3]}
                            ></Button>
                        </Link>
                        <Button
                            color="primary"
                            text={ButtonsText[4]}
                            onClick={handleLogout}
                        ></Button>
                    </>
                )}
            </div>
        </div>
    )
}
