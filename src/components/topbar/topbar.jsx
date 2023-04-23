import "./topbar.css"
import img from "../../assets/images/IMG_6600.jpg"

export default function Topbar() {
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
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
        <img className='topImg' src={img} alt="self" />
        <i className="topSearchIcon fas fa-search"/>
        </div>
    </div>
  )
}
