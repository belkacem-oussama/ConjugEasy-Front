import Student from './Student.jsx'
import Teacher from './Teacher.jsx'

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
