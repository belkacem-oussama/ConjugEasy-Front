import Prof from './Teacher.jsx'
import Student from './Student.jsx'

import '../assets/styles/pages/personal-space.scss'
import '../assets/styles/images/belt.scss'
import { useNavigate } from 'react-router-dom'

export default function PersonalSpace({ setIsLogged }) {
    const navigate = useNavigate()
    const usersRoles = localStorage.getItem('user-role')

    const handleLogout = () => {
        setIsLogged(false)
        navigate('/bye-bye')
    }

    return (
        <>
            {usersRoles === 'student' ? (
                <Student
                    setIsLogged={setIsLogged}
                    handleLogout={handleLogout}
                />
            ) : (
                <Prof setIsLogged={setIsLogged} handleLogout={handleLogout} />
            )}
        </>
    )
}
