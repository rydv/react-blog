import './login.css'

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder='Enter your email...'/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder='Enter your password...'/>
            <button className="lognButton">Login</button>
        </form>
        <button className="registerButton">Register</button>
    </div>
  )
}
