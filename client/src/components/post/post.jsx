import './post.css'
import {Link} from 'react-router-dom';

export default function Post({post}) {
  return (
    <div className="post">
        {post.photo && (
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/01/0f/98/32/misty-kodai.jpg" alt="" 
          className="postImg" />
        )}
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map(
                (cat) => (
                  <span className='postCat'>{cat}</span>
                )
              )}
            </div>
            <Link to={`/post/${post._id}`} className="link">
              <span className="postTitle">{post.title}</span>
            </Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">
        {post.desc}
        </p>
    </div>
  )
}
