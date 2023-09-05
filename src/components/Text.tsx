import { useState } from 'react'
import text from '../assets/json/text.json'

export default function Text() {
    const [replacedWords, setReplacedWords] = useState<{
        [key: string]: boolean
    }>({})

    const handleVerbReplace = (verb: string) => {
        console.log(replacedWords)
    }

    const wordsToReplace = text.words.filter((word) => text.text.includes(word))

    const displayText = text.text.split(' ').map((word, index) => {
        if (wordsToReplace.includes(word) && !replacedWords[word]) {
            return (
                <span key={index}>
                    <input
                        type="text"
                        placeholder={word}
                        onChange={(e) => handleVerbReplace(word)}
                    />{' '}
                </span>
            )
        } else {
            return (
                <span key={index} className="text">
                    {word}{' '}
                </span>
            )
        }
    })

    return <div>{displayText}</div>
}
