import { Link, useLocation } from "react-router-dom"
import "./singlePost.css"
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  const {user} = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(()=>{
    const getPost = async () => {
      const res = await axios.get(`https://shareviablog.onrender.com/api/posts/${path}`)
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
    getPost()
  },[path])

  const handleDelete = async () => {
    try {
      await axios.delete(`https://shareviablog.onrender.com/api/posts/${post._id}`,{
        data:{username: user.username}});
      window.location.replace("/");
    } catch (err) {
      console.log(err)
    }
  }

  const handleUpdate = async () => {
    try {
      await axios.put(`https://shareviablog.onrender.com/api/posts/${post._id}`,{
        username: user.username,title,desc
      }
      );
      window.location.reload();
    } catch (err) {
      console.log('Error updating post: '+ err)
    }
  }
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo}
          alt="" className="singlePostImg" />
        )}{
          updateMode ? <input value={title} className="singlePostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)}/> :
        <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && <div className="singlePostEdit">
                <i class="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                <i class="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
            </div>}
        </h1>
        }
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>
              <Link to={`/?user=${post.username}`} className="link">
                {post.username}
              </Link>
            </b></span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {
          updateMode ? (
          <>
          <textarea value={desc} className="singlePostDescInput" onChange={(e) => setDesc(e.target.value)}/>
          <button className="singlePostButton" onClick={handleUpdate}>Update</button>
          </>
          ) 
          : 
          <p className="singlePostDesc">
            {desc}
          </p>
          }
       </div>
    </div>
  )
}
