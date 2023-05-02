import { Link, useLocation } from "react-router-dom"
import "./singlePost.css"
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  const PF = "http://localhost:5002/images/"
  const {user} = useContext(Context);

  useEffect(()=>{
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`)
      setPost(res.data)
    }
    getPost()
  },[path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`,{
        data:{username: user.username}});
      window.location.replace("/");
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo}
          alt="" className="singlePostImg" />
        )}
        <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username && <div className="singlePostEdit">
                <i class="singlePostIcon far fa-edit"></i>
                <i class="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
            </div>}
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>
              <Link to={`/?user=${post.username}`} className="link">
                {post.username}
              </Link>
            </b></span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
        {post.desc}
        </p>
       </div>
    </div>
  )
}
