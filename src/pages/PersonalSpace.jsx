import { useNavigate } from 'react-router-dom'

import Student from './Student.jsx'
import Teacher from './Teacher.jsx'

import '../assets/styles/pages/personal-space.scss'
import '../assets/styles/images/belt.scss'

export default function PersonalSpace({ handleLogout, setIsLogged }) {
    const usersRoles = localStorage.getItem('user-role')

    return (
        <>
            {usersRoles === 'student' ? (
                <Student
                    setIsLogged={setIsLogged}
                    handleLogout={handleLogout}
                />
            ) : (
                <Teacher
                    setIsLogged={setIsLogged}
                    handleLogout={handleLogout}
                />
            )}
        </>
    )
}
