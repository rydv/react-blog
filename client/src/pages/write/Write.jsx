import { useContext, useState } from 'react'
import './write.css';
import axios from 'axios';
import { Context } from '../../context/Context';
import storage from '../../firebase';

export default function Write() {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState("");
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(false);

    const loadFile = async (file) => {
        const fileName= Date.now()+file.name;
                
        try {
            console.log('loading file')
            const uploadRef = storage.ref(`/image_assets/${fileName}`)
            console.log('not failed at this')
            await uploadRef.put(file);
            return await uploadRef.getDownloadURL()
        } catch (err) {
            console.log('Error while uploading file: '+err)
        }
    }

    const handleSubmit = async (e) =>{
        setLoading(true)
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc}
        if (file){
                const url = await loadFile(file)
                newPost.photo = url.toString()
            }   
        try {
            console.log(newPost)
            const res = await axios.post('/posts/',newPost);
            window.location.replace("/post/"+res.data._id);
        } catch (err) {
            console.log('Error while creating new post: '+ err)
        } finally {
            setLoading(false)
        }
    }
  return (
    <div className="write">
        {file && (
        <img src={URL.createObjectURL(file)} 
        alt="" className="writeImg" />
        )}
        <form className='writeForm' onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i> 
                </label>
                <input type="file" id='fileInput' style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className="writeFormGroup">
                <textarea 
                    placeholder='Tell you story ...' 
                    type='text'
                    className='writeInput writeText'
                    onChange={(e)=>setDesc(e.target.value)}
                ></textarea>
            </div>
            {loading ?
            <button className="writeSubmit" type='submit'>Publishing ...</button>
        : <button className="writeSubmit" type='submit'>Publish</button>}
        </form>
    </div>
  )
}
