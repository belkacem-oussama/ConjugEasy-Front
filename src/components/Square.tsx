import '../assets/styles/components/square.scss'
import Input from './Input.tsx'

export default function Square() {
    return (
        <div className="square-component">
            <Input />
            <Input isPassword />
        </div>
    )
}
