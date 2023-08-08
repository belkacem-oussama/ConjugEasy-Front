import { useLocation } from 'react-router-dom'
import '../assets/styles/components/button.scss'

type Props = React.ComponentProps<'button'> & {
    color: 'primary' | 'secondary'
    text?: string
    size?: string
}

const Button: React.FC<Props> = ({ color, text, size }) => {
    const location = useLocation()
    const getButtonStyle = () => {
        let styles = 'size_button '

        switch (color) {
            case 'primary':
                styles += 'primary_button '
                break
            case 'secondary':
                styles += 'secondary_button '
                break
            default:
                break
        }

        switch (size) {
            case 'small':
                styles += 'small-button '
                break
            default:
                break
        }

        location.pathname === '/result' ? (styles += 'button-result') : ''

        return styles
    }

    return (
        <button className={`${getButtonStyle()}`} id="button-component">
            {text}
        </button>
    )
}

export default Button
