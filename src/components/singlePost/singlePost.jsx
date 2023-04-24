import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        <img src="https://img.veenaworld.com/wp-content/uploads/2020/11/9-Hill-Stations-to-Visit-in-Tamil-Nadu-1536x1024.jpg" 
        alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Kodaikanal, soul rejuvenating experience
            <div className="singlePostEdit">
                <i class="singlePostIcon far fa-edit"></i>
                <i class="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Sanjay</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
        Kodaikanal is a picturesque hill station located in the state of Tamil Nadu, India. Perched at an altitude of 2,133 meters above sea level, this tranquil town is surrounded by the lush greenery of the Western Ghats. Kodaikanal is known for its salubrious climate, which provides a much-needed respite from the sweltering heat of the plains.
        Kodaikanal is adorned with a wide range of flora and fauna that is unique to the region. The town is famous for its eucalyptus trees, which emit a refreshing fragrance that fills the air. The town also boasts of a wide variety of wildflowers and herbs that are used in traditional medicine.
        One of the main attractions of Kodaikanal is its breathtaking scenery. The town is blessed with a number of natural wonders, including waterfalls, lakes, and valleys. One of the most popular spots in Kodaikanal is the Kodaikanal Lake, a man-made lake built in the 19th century. The lake is surrounded by lush green hills, and visitors can take a boat ride to explore its beauty. Another popular attraction is the Coaker's Walk, a one-kilometer-long paved path that offers stunning views of the valley below.
        Kodaikanal is also known for its rich cultural heritage. The town is home to a number of temples, churches, and museums that showcase the region's history and traditions. One of the most famous landmarks in Kodaikanal is the Kurinji Andavar Temple, which is dedicated to Lord Murugan. The temple is surrounded by acres of kurinji flowers, which bloom once every twelve years.
        Apart from its natural beauty and cultural heritage, Kodaikanal is also famous for its adventure activities. The town offers a range of outdoor activities, including trekking, camping, and cycling. The town is also a popular destination for paragliding and rock climbing.
        In conclusion, Kodaikanal is a unique destination that offers something for everyone. Whether you're looking for natural beauty, cultural experiences, or adventure activities, Kodaikanal is the perfect place to visit. With its breathtaking scenery, mild climate, and rich heritage, Kodaikanal is truly a paradise on earth.
        </p>
       </div>
    </div>
  )
}
