import Input from './Input.jsx'

import '../assets/styles/components/text.scss'

import text from '../assets/json/text.json'

export default function Text({ inputValue, setInputValue }) {
    const wordsToReplace = text.words.filter((word) => text.text.includes(word))
    const splittedText = text.text.split(' ')
    let wordIndex = []

    const displayText = splittedText.map((word, index) => {
        if (wordsToReplace.includes(word)) {
            wordIndex.push(word)
            return (
                <span key={index}>
                    <Input
                        placeholderValue={word}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        index={index}
                    />{' '}
                </span>
            )
        } else {
            return <span key={index}>{word} </span>
        }
    })

    localStorage.setItem(
        'word-index',
        JSON.stringify(
            wordIndex.map((element, index) => {
                return element
            })
        )
    )

    return <div className="text-display">{displayText}</div>
}
