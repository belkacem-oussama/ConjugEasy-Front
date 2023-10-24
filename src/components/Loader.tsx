import React from 'react'
import Loader from 'react-loaders'
<<<<<<< HEAD

interface LoaderComponentProps {
    type: string
=======
import { LoaderType } from 'react-loaders'

interface LoaderComponentProps {
    type: LoaderType
>>>>>>> 020df8bfb795d219569ecf11bed945ba7cdc1190
    active: boolean
}

export default function LoaderComponent({
    type,
    active,
}: LoaderComponentProps) {
    return (
        <>
<<<<<<< HEAD
            <Loader type="pacman" active />
=======
            <Loader type={type} active={active} />
>>>>>>> 020df8bfb795d219569ecf11bed945ba7cdc1190
        </>
    )
}
