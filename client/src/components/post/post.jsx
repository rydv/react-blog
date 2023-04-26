import './post.css'

export default function Post() {
  return (
    <div className="post">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/01/0f/98/32/misty-kodai.jpg" alt="" 
        className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Kodain near lstecb sktec</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
        Kodaikanal is a picturesque hill station located in the southern Indian state of Tamil Nadu. Situated in the Palani Hills of the Western Ghats, the town is surrounded by lush green forests, misty mountains, and scenic valleys. Kodaikanal is known for its cool climate and pleasant weather, making it a popular destination for tourists seeking respite from the heat and humidity of the lowlands.
        The town's main attraction is the beautiful Kodaikanal Lake, which is surrounded by hills and forests and is a popular spot for boating and other water activities. The lake is also surrounded by several parks, including Bryant Park and Coaker's Walk, which offer stunning views of the lake and the surrounding mountains.
        Kodaikanal is also known for its scenic walking trails, which offer breathtaking views of the Western Ghats and the surrounding valleys. One of the most popular trails is the Dolphin's Nose, which is a rock formation that resembles the nose of a dolphin.
        </p>
    </div>
  )
}
