import { useContext, useState } from "react"
import Sidebar from "../../components/sidebar/sidebar"
import "./settings.css"
import { Context } from "../../context/Context";
import axios from "axios";
// import img from "../../assets/images/IMG_6600.jpg"

export default function Settings() {
  const {user,isFetching, dispatch} = useContext(Context);
  const [file,setFile] = useState("");
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [success,setSuccess] = useState(false);
  const PF = "http://localhost:5002/images/"

  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch({type:'UPDATE_START'})
    const updatedUser = {
        userId:user._id,
        username,
        email,
        password}
    if (file){
        const data = new FormData();
        const filename= Date.now()+file.name;
        data.append("name",filename);
        data.append("file",file);
        try {
            await axios.post("https://shareviablog.onrender.com/api/upload", data)
            updatedUser.profilePic = filename;
        } catch (err) {
            console.log('Error while uploading file: '+err)
        }
    }
    try {
        const res = await axios.put('https://shareviablog.onrender.com/api/users/'+user._id,updatedUser);
        setSuccess(true);
        dispatch({type:'UPDATE_SUCCESS', payload: res.data})
    } catch (err) {
        console.log('Error while creating new post: '+ err)
        dispatch({type:'UPDATE_FAILURE'})
    }
}

  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
            {file ? (
              <img src={URL.createObjectURL(file)} 
              alt="" className="settingsPPImg" />
            ):(
              <img src={PF + user.profilePic} 
              alt="" className="settingsPPImg" />
            )}
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{display: "none"}} onChange={(e)=>setFile(e.target.files[0])}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>
            <label>Email</label>
            <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button className="settingsSubmit" type="submit">Update</button>
            {success && <span style={{color: "green", textAlign: "center", marginTop:"5px"}}>Update Successful!</span>}
            {isFetching && <span style={{color: "yellow", textAlign: "center", marginTop:"5px"}}>Updating ...</span>}
          </form>
        </div>
        <Sidebar />
    </div>
  )
}
 