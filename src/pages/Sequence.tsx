import Square from '../components/Square.tsx'
import '../assets/styles/pages/sequence.scss'
import Button from '../components/Button.tsx'

export default function Sequence() {
    return (
        <div className="sequence-container">
            <div className="sequence-container-page">
                <Square />
            </div>
            <Button color="primary" text="J'ai fini !" />
        </div>
    )
}
