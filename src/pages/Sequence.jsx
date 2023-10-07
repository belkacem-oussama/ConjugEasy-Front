import { Link } from 'react-router-dom'

import Square from '../components/Square.jsx'
import Button from '../components/Button.jsx'

export default function Sequence({
    inputValue,
    setInputValue,
    handleFormSubmit,
    isExam,
    setIsExam,
}) {
    return (
        <div className="sequence-container">
            {isExam ? <h1>Passage de ceinture</h1> : <h1>Entraînement</h1>}
            <div className="sequence-container-page">
                <Square
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    isExam={isExam}
                    setIsExam={setIsExam}
                />
            </div>
            <Link to="/result">
                <Button
                    color="primary"
                    text="J'ai fini !"
                    onClick={handleFormSubmit}
                />
            </Link>
        </div>
    )
}
