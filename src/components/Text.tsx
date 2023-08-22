import React, { useState } from 'react'
import text from '../assets/json/text.json'

type TextData = {
    text: string
    words: string[]
}

export default function Text() {
    const [replacedWords, setReplacedWords] = useState<{
        [key: string]: boolean
    }>({})

    const handleVerbReplace = (verb: string) => {
        setReplacedWords((prevReplacedWords) => ({
            ...prevReplacedWords,
            [verb]: true,
        }))
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
            return <span key={index}>{word} </span>
        }
    })

    return <div>{displayText}</div>
}
