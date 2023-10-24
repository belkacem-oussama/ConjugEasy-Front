import { useLocation } from 'react-router-dom'

import Input from './Input.jsx'
import Button from './Button.jsx'
import Text from './Text.jsx'

import ConjugEasyLogo from '../assets/images/logo/ConjugEasy-Login.png'
import ConjugEasyBlueBelt from '../assets/images/belts/ConjugEasy_BlueBelt.png'

import LoaderComponent from './Loader.jsx'

import { InitialValuesInterface } from '../App.js'

interface SquareProps {
    handleLogin?: () => void
    inputValue?: InitialValuesInterface
    setInputValue?: (newInputValue: InitialValuesInterface) => void
    errorMessage?: boolean
    setErrorMessage?: (value: boolean) => void
    isLoading?: boolean
}

export default function Square({
    handleLogin,
    inputValue,
    setInputValue,
    errorMessage,
    setErrorMessage,
    isLoading,
}: SquareProps) {
    const location = useLocation()
    const storageScore: string | null = localStorage.getItem('positive-counter')
    let goodScore: number = 0
    let textToDisplay

    if (storageScore !== null) {
        goodScore = parseInt(storageScore)

        switch (goodScore) {
            case 5:
            case 4:
                textToDisplay = 'Bravo ! Très bonne note, continue ainsi !'
                break
            case 3:
                textToDisplay =
                    'Continue, ne lâche pas tes efforts, tu es sur la bonne voie !'
                break
            case 2:
            case 1:
                textToDisplay = 'Il faut réviser, allez, au boulot !'
                break
            case 0:
                textToDisplay = 'Houston, on a un problème...'
                break
            default:
        }
    }

    return (
        <>
            {location.pathname === '/login' ? (
                <div className="square-component">
                    <img
                        src={ConjugEasyLogo}
                        id="login-logo"
                        alt="ConjugEasy Logo"
                    />
                    <Input
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        errorMessage={errorMessage}
                        setErrorMessage={setErrorMessage}
                    />
                    <Input
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        isPassword
                        errorMessage={errorMessage}
                        setErrorMessage={setErrorMessage}
                    />
                    {isLoading ? (
                        <LoaderComponent type="pacman" active />
                    ) : (
                        <Button
                            color="secondary"
                            text={errorMessage ? 'Oups...' : 'Connexion'}
                            size="small"
                            onClick={handleLogin}
                            error={errorMessage}
                        />
                    )}
                </div>
            ) : (
                ''
            )}
            {location.pathname === '/sequence' ? (
                <div className="square-tablet-sequence">
                    <Text
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                </div>
            ) : (
                ''
            )}
            {location.pathname === '/result' ? (
                <div className="square-tablet-result">
                    <h1>Score :</h1>
                    {goodScore === null || isNaN(goodScore) ? (
                        <h2>Oups...une erreur est survenue</h2>
                    ) : (
                        <h2>{goodScore}/5</h2>
                    )}
                    <p>{textToDisplay}</p>
                </div>
            ) : (
                ''
            )}
            {location.pathname === '/board' ? (
                <div className="square-tablet-board">
                    <div className="square-tablet-board-introduction">
                        <p>
                            Tes résultats se sont améliorés, poursuis tes
                            efforts !
                        </p>
                        <p>
                            D'après ces derniers, tu devrais réviser en priorité
                            les verbes suivants : être, avoir, manger
                        </p>
                    </div>
                    <div className="square-tablet-board-belt">
                        <p>Prochaine ceinture :</p>
                        <img src={ConjugEasyBlueBelt} id="belt" />
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    )
}
