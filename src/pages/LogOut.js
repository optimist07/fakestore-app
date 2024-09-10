import React from 'react'
import { useNavigate } from 'react-router-dom'

function LogOut() {
    const navigate = useNavigate();

    const handleLogOut=()=>{
        localStorage.removeItem('auth');
        navigate('/')
    };
  return (
    <div className='container w-25 text-center text-white bg-secondary p-2 rounded-2 my-5 mx-ato'>
        <h5>Are you sure you want to log out?</h5>
        <button className='btn btn-danger my-3' onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default LogOut