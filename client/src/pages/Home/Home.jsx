import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Posts from "../../components/posts/posts";
import "./home.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  const {user} = useContext(Context);

  useEffect(()=>{
    console.log(search)
    const fetchPosts = async () => {
      const res = await axios.get("https://shareviablog.onrender.com/api/posts"+search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <>
    <Header />
    <div className="home">
        <Posts posts={posts}/>
        {user && <Sidebar />}
    </div>
    </>
  )
}
