import "./posts.css"
import Post from "../post/post"
import { useContext } from "react"
import { Context } from "../../context/Context"

export default function Posts({posts}) {
  const {user} = useContext(Context);
  return (
    <div className={user ? "posts":"posts12"}>
      {posts.map((post)=>(
        <Post post={post}/>
      ))}
    </div>
  )
}
