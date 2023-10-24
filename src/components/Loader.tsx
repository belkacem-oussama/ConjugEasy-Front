import React from 'react'
import Loader from 'react-loaders'
import { LoaderType } from 'react-loaders'

interface LoaderComponentProps {
    type: LoaderType
    active: boolean
}

export default function LoaderComponent({
    type,
    active,
}: LoaderComponentProps) {
    return (
        <>
            <Loader type={type} active={active} />
        </>
    )
}
