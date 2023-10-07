import Input from './Input.jsx'

import text from '../assets/json/text.json'
import goodConjug from '../assets/json/text.json'

export default function Text({ inputValue, setInputValue }) {
    //SET GOOD VERB'S CONJUG IN LS
    localStorage.setItem(
        'goodConjug',
        JSON.stringify(goodConjug['words-good-conjug'])
    )

    // GOOD VERB'S CONJUG
    const goodVerbs = JSON.parse(localStorage.getItem('goodConjug'))

    // MANAGE TEXT'S DISPLAY WITH INPUT
    const wordsToReplace = text.words.filter((word) => text.text.includes(word))
    const splittedText = text.text.split(' ')

    // MANAGE INPUT'S VALUES
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
