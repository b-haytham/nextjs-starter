import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../src/redux/store'

function page2() {
    const router = useRouter()
    const counter = useSelector((state: AppState) => state.counter.value)
    return (
        <div>
            <h1>Page 2</h1>
            <h1>{counter}</h1>
            <button onClick={() => router.push('/')}>Home</button>
        </div>
    )
}

export default page2
