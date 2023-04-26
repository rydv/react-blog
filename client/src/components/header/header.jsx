import "./header.css";
import headerImg from "../../assets/images/IMG_2209.jpg"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className="headerTitleSm">Experience through</span>
          <span className="headerTitlelg">Blog</span>
        </div>
        <img src='https://images.unsplash.com/photo-1610024565242-a7e3c07b4d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt="" className="headerImg" />
    </div>
  )
}
