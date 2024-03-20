import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const { userId } = useParams();

    return (
        <div className='text-center bg-gray-400 p-4 m-4 text-2xl'>User : {userId}</div>
    )
}

export default User