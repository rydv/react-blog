import "./topbar.css"
import img from "../../assets/images/IMG_6600.jpg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
  const {user, dispatch} = useContext(Context);
  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
  }
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
            <img className='topImg' src={img} alt="self" />
            
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
