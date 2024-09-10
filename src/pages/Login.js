import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [attempts, setAtempts] = useState(0);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            localStorage.setItem('auth', true);
            navigate('/');
        } else {
            if (attempts < 2) {
                alert('Invalid Login Details. Try again.');
                setAtempts(attempts + 1);
            } else {
                alert('Invalid Login Details. Redirecting to Sign Up ...,');
                navigate('/signUp')
            }
        }
    };

    return (
        <div className='container w-25 text-center text-white primary p-4 rounded-5 my-5 mx-ato'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input className='form-control my-3' type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input className='form-control my-3' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type='submit' className='btn btn-success my-3'>Login</button>
            </form>
        </div>
    )
}
export default Login