import Student from './Student.jsx'
import Teacher from './Teacher.jsx'

export interface UserInterface {
    handleLogout: () => void
    setIsLogged: () => void
}

export default function PersonalSpace({
    handleLogout,
    setIsLogged,
}: UserInterface) {
    const usersRoles: string | null = localStorage.getItem('user-role')

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
