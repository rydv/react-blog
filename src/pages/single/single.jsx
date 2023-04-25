import Sidebar from "../../components/sidebar/sidebar"
import "./single.css"
import SinglePost from "../../components/singlePost/singlePost"

export default function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
