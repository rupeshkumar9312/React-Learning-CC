import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Login() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Enter Username" value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Enter Password"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
        </div>


    )
}

export default Login