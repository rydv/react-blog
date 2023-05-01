import { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const onRegister = async (e) =>{
    e.preventDefault();
    try {
      setError(false)
      const res = await axios.post('/auth/register',{
        username : username,
        email : email,
        password : password
      })
      console.log(res.data)
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true)
    }
    
  }
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={onRegister}>
            <label>Username</label>
            <input type="text" className="registerInput" placeholder='Enter your username...' onChange={(e)=>{setUsername(e.target.value)}}/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder='Enter your email...' onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder='Enter your password...' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className="regsterButton">Register</button>
        </form>
        <button className="loginButton">
        <Link to='/login' className='link'>Login</Link>
        </button>
        {error && <span className='registerError'>Something went wrong!</span>}
    </div>
  )
}
