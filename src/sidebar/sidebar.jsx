import "./sidebar.css"
import sidebarImage from '../assets/images/pondi.jpg'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={sidebarImage} alt="" className="sidebarImg" />
            <p>I'm a multi-passionate blogger who loves exploring different topics. My blog covers music, style, sport, and tech – 
                all areas that I'm passionate about. Through my writing, I hope to share my perspectives and insights with others who share similar interests.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"/>
                <i className="sidebarIcon fa-brands fa-square-twitter"/>
                <i className="sidebarIcon fa-brands fa-square-pinterest"/>
                <i className="sidebarIcon fa-brands fa-square-instagram"/>
            </div>
        </div>

    </div>
  )
}
