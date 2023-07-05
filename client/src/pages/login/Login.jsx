import { useContext, useRef } from 'react';
import './login.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import axios from "axios";

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post("https://shareviablog.onrender.com/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload:res.data})
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE"})
    }
  };
  console.log(isFetching)
  return (
    <div className="login" onSubmit={handleSubmit}>
        <span className="loginTitle" >Login</span>
        <form className="loginForm">
            <label>Username</label>
            <input type="text" className="loginInput" placeholder='Enter your username...' ref={userRef}/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder='Enter your password...' ref={passwordRef}/>
            <button className="lognButton" type="submit" disabled={isFetching}>Login</button>
        </form>
        <button className="registerButton">
          <Link to='/register' className='link'>Register</Link>
        </button>
    </div>
  )
}
