import Button from '../components/Button.tsx'
import '../assets/styles/pages/personal-space.scss'

export default function PersonalSpace() {
    const textButton = [
        'Je passe la ceinture noire',
        'Je consulte mes résultats',
        "Je m'exerce",
    ]

    return (
        <div className="personal-space-container">
            <p>Salut Amel ! Alors, que veux-tu faire aujourd'hui ? </p>
            <div className="personal-space-container-main">
                <Button color="primary" text={textButton[0]} />
                <Button color="primary" text={textButton[1]} />
                <Button color="primary" text={textButton[2]} />
            </div>
        </div>
    )
}
