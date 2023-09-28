import Input from './Input.jsx'

import '../assets/styles/components/text.scss'

import text from '../assets/json/text.json'

export default function Text({ inputValue, setInputValue }) {
    const wordsToReplace = text.words.filter((word) => text.text.includes(word))

    const displayText = text.text.split(' ').map((word, index) => {
        if (wordsToReplace.includes(word)) {
            return (
                <span key={index}>
                    <Input
                        placeholderValue={word}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />{' '}
                </span>
            )
        } else {
            return <span key={index}>{word} </span>
        }
    })

    return <div className="text-display">{displayText}</div>
}
