import "./topbar.css"
// import img from "../../assets/images/IMG_6600.jpg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
  const {user, dispatch} = useContext(Context);
  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
  }
  const PF = "http://localhost:5002/images/"
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"/>
            <i className="topIcon fa-brands fa-square-twitter"/>
            <i className="topIcon fa-brands fa-square-pinterest"/>
            <i className="topIcon fa-brands fa-square-instagram"/>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link to="/" className="link">HOME</Link> 
                </li>
                <li className="topListItem">
                <Link to="/" className="link">ABOUT</Link> 
                </li>
                <li className="topListItem">
                <Link to="/" className="link">CONTACT</Link> 
                </li>
                <li className="topListItem">
                <Link to="/write" className="link">WRITE</Link> 
                </li>
                {user && <li className="topListItem" onClick={handleLogout}>
                  LOGOUT
                </li>}
            </ul>
        </div>
        <div className="topRight">
            {user ? (
              <Link  to="/settings" className="link">
                <img className='topImg' src={user.profilePic ? PF+user.profilePic : "https://www.themonthly.com.au/sites/default/files/styles/featured_essay/public/Cooke_0322_1140x700.jpg"} alt="self" />
              </Link>
            ):(
              <ul className="topList">
                  <li className="topListItem">
                    <Link to="/login" className="link">LOGIN</Link> 
                  </li>
                  <li className="topListItem">
                    <Link to="/register" className="link">REGISTER</Link> 
                  </li>
              </ul>
            )}
        <i className="topSearchIcon fas fa-search"/>
        </div>
    </div>
  )
}
