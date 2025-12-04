'use client'
import { useState } from 'react'
// import { ServerComponentOne } from './server-component-one'
// import { ClientComponentTwo } from './client-component-two'

export const ClientComponentOne = ({children}: {children: React.ReactNode})=>{
    const [name, setName] = useState("Batman")

    return <>
    <h1>Client Component One</h1>
    {children}
    {/* <ClientComponentTwo /> */}
    {/* <ServerComponentOne /> */}
    </>
}