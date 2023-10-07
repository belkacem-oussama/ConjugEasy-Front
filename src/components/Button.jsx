import { useLocation } from 'react-router-dom'

const Button = ({ color, text, size, img, error, onClick }) => {
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

        if (error) {
            styles += 'shake-horizontal'
        }

        location.pathname === '/result' ||
        location.pathname === '/board' ||
        location.pathname === '/personal' ||
        location.pathname === '/bye-bye'
            ? (styles += 'button-result')
            : ''

        return styles
    }

    return (
        <button
            className={`${getButtonStyle()}`}
            id="button-component"
            onClick={onClick}
        >
            {text}
            {img ? <img src={img} id="logo"></img> : ''}
        </button>
    )
}

export default Button
