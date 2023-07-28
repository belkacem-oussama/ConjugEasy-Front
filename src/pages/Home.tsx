import Button from '../components/Button.tsx'

export default function Home() {
    return (
        <div>
            <Button color="primary" size="small">
                Je passe la ceinture noire
            </Button>
            <Button color="primary" size="medium">
                Je m'exerce
            </Button>
            <Button color="primary" size="large">
                Je consulte mes résultats
            </Button>
            <Button color="primary" size="large">
                Eleve
            </Button>
            <Button color="primary" size="large">
                Professeur
            </Button>
            <Button color="primary" size="large">
                Visiteur
            </Button>
        </div>
    )
}
