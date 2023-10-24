import { Link } from 'react-router-dom'
import { useState } from 'react'

import Button from '../components/Button.js'
import Square from '../components/Square.js'

import ConjugEasyExercice from '../assets/images/logo/ConjugEasy_Exercices.png'
import ConjugEasyHome from '../assets/images/logo/ConjugEasy_Home.png'
import ConjugEasyResult from '../assets/images/logo/ConjugEasy_Result.png'

import { InitialValuesInterface } from '../App.js'

interface ResultInterface {
    inputValue: InitialValuesInterface
    setInputValue: (newInputValue: InitialValuesInterface) => void
}

export default function Result({ inputValue, setInputValue }: ResultInterface) {
    const [readyForTest, setReadyForTest] = useState<boolean>(false)

    const textButton: string[] = [
        "Je m'exerce",
        'Je consulte mes résultats',
        "Retour à l'espace perso",
        'Passer la ceinture noire',
    ]

    const handleRemoveCounter: () => void = () => {
        localStorage.removeItem('positive-counter')
    }

    return (
        <div className="result">
            <div className="result-container">
                <div className="result-container-page">
                    <Square
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                </div>
                <div className="result-container-button">
                    <div className="result-container-button-top">
                        <Link to="/train">
                            <Button
                                color="primary"
                                text={textButton[0]}
                                img={ConjugEasyExercice}
                                onClick={handleRemoveCounter}
                            />
                        </Link>
                        <Link to="/board">
                            <Button
                                color="primary"
                                text={textButton[1]}
                                img={ConjugEasyResult}
                                onClick={handleRemoveCounter}
                            />
                        </Link>
                    </div>
                    <div className="result-container-button-bottom">
                        {readyForTest ? (
                            <Link to="/test">
                                <Button color="primary" text={textButton[3]} />
                            </Link>
                        ) : (
                            <Link to="/personal">
                                <Button
                                    color="primary"
                                    text={textButton[2]}
                                    img={ConjugEasyHome}
                                    onClick={handleRemoveCounter}
                                />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
