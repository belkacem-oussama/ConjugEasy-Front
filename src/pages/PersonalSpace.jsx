import Prof from './Teacher.jsx'
import Student from './Student.jsx'

import '../assets/styles/pages/personal-space.scss'
import '../assets/styles/images/belt.scss'

export default function PersonalSpace({ setIsLogged }) {
    const usersRoles = localStorage.getItem('user-role')

    return (
        <>
            {usersRoles === 'student' ? (
                <Student setIsLogged={setIsLogged} />
            ) : (
                <Prof setIsLogged={setIsLogged} />
            )}
        </>
    )
}
