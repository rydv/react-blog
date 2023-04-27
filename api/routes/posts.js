const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE NEW POST
router.post("/", async (req,res)=>{
    const newPost = new Post(req.body);
        try {
            const savedPost = await newPost.save();
            res.status(200).json(savedPost)
        } catch (err) {
            res.status(500).json(err)
        };
});

//UPDATE POST
router.delete("/:id", async (req,res)=>{
    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.params.id);
            try {
                console.log(user)
                await Post.deleteMany({username: user.username});
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User has been deleted successfully!")
            } catch (err) {
                res.status(500).json(err)
            }
        } catch (err) {
            res.status(404).json("User not found!")
        }
    } else {
        res.status(401).json("You are not allowed to delete some one else's account!")
    }
});

//DELETE POST

//GET POST
router.get("/:id", async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others}=user._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(err)
    }
})


module.exports = router;
