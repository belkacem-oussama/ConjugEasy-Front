import React from 'react'
import Loader from 'react-loaders'

interface LoaderComponentProps {
    type: string
    active: boolean
}

export default function LoaderComponent({
    type,
    active,
}: LoaderComponentProps) {
    return (
        <>
            <Loader type="pacman" active />
        </>
    )
}
