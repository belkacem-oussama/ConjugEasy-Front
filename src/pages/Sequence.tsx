import { Link } from 'react-router-dom'

import Square from '../components/Square.js'
import Button from '../components/Button.js'

import { InputValue } from '../App.js'

interface SequenceInterface {
    inputValue: InputValue
    setInputValue: (newInputValue: InputValue) => void
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
