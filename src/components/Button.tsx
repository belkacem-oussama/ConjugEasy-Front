import React from 'react'
import '../assets/styles/components/button.scss'

type Props = React.ComponentProps<'button'> & {
    color?: 'primary' | 'secondary'
    size: 'small' | 'medium' | 'large'
}

const Button: React.FC<Props> = ({ color, size, children }) => {
    const getButtonStyle = () => {
        let styles = ''

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
                styles += 'small_button '
                break
            case 'medium':
                styles += 'medium_button '
                break
            case 'large':
                styles += 'large_button '
                break
            default:
                break
        }

        return styles
    }

    return <button className={`${getButtonStyle()}`}>{children}</button>
}

export default Button
