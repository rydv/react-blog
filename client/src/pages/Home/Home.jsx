import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Posts from "../../components/posts/posts";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  },[])
  return (
    <>
    <Header />
    <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
    </div>
    </>
  )
}
