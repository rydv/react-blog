import { Link, useLocation } from "react-router-dom"
import "./singlePost.css"
import { useEffect, useState } from "react";
import axios from 'axios';

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  const PF = "http://localhost:5002/images/"

  useEffect(()=>{
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`)
      setPost(res.data)
    }
    getPost()
  },[path])
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo}
          alt="" className="singlePostImg" />
        )}
        <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
                <i class="singlePostIcon far fa-edit"></i>
                <i class="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
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
