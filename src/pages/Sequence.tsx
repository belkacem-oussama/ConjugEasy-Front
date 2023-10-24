import { Link } from 'react-router-dom'

import Square from '../components/Square.js'
import Button from '../components/Button.js'

import { InitialValuesInterface } from '../App.js'

interface SequenceInterface {
    inputValue: InitialValuesInterface
    setInputValue: (newInputValue: InitialValuesInterface) => void
    handleFormSubmit: () => void
}

export default function Sequence({
    inputValue,
    setInputValue,
    handleFormSubmit,
}: SequenceInterface) {
    return (
        <div className="sequence-container">
            <div className="sequence-container-page">
                <Square inputValue={inputValue} setInputValue={setInputValue} />
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
