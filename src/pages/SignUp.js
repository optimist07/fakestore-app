import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();

    const handleSignUp = (e)=>{
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify({username, password}) );
        alert(`User signed up successfully!`);
        navigate('/login');
    };

  return (
    <div className='container w-25 text-center text-white bg-success p-4 rounded-5 my-5 mx-ato'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
            <input className='form-control my-3'  type='text' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            <input className='form-control my-3' type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <button  className='btn btn-primary my-3' type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp