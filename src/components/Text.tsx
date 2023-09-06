import Input from './Input.tsx'

import text from '../assets/json/text.json'
import '../assets/styles/components/text.scss'

export default function Text() {
    const wordsToReplace = text.words.filter((word) => text.text.includes(word))

    const displayText = text.text.split(' ').map((word, index) => {
        if (wordsToReplace.includes(word)) {
            return (
                <span key={index}>
                    <Input placeholderValue={word} />{' '}
                </span>
            )
        } else {
            return <span key={index}>{word} </span>
        }
    })

    return <div className="text-display">{displayText}</div>
}
