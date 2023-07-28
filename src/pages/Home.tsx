import ConjugEasyTitle from '.././assets/images/ConjugEasy.png'
import ConjugEasyNotes from '.././assets/images/ConjugEasy_Notes.png'
import ConjugEasyBag from '.././assets/images/ConjugEasy_Bag.png'
import Button from '../components/Button.tsx'

export default function Home() {
    const text: String[] = ['Élève', 'Professeur', 'Visiteur']
    const buttons = text.map((label, index) => (
        <Button key={index} size="small" color="primary">
            {label}
        </Button>
    ))

    return (
        <div className="home">
            <img src={ConjugEasyTitle} alt="ConjugEasy Title" />
            {buttons}
            <img src={ConjugEasyNotes} alt="ConjugEasy Notes" />
            <img src={ConjugEasyBag} alt="ConjugEasy Bag" />
        </div>
    )
}
