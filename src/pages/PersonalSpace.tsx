<<<<<<< HEAD
import Student from './Student.jsx'
import Teacher from './Teacher.jsx'

export interface UserInterface {
    handleLogout: () => void
    setIsLogged: () => void
}

=======
import React from 'react'

import Student from './Student.jsx'
import Teacher from './Teacher.jsx'

export interface UserInterface {
    handleLogout: () => void
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

>>>>>>> 020df8bfb795d219569ecf11bed945ba7cdc1190
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
