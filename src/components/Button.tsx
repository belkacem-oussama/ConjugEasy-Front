import React from 'react'
import '../assets/styles/components/button.scss'

type Props = React.ComponentProps<'button'> & {
    color: 'primary' | 'secondary'
}

const Button: React.FC<Props> = ({ color, children }) => {
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
        console.log(styles)

        return styles
    }

    return (
        <button className={`${getButtonStyle()}`} id="button-component">
            {children}
        </button>
    )
}

export default Button
