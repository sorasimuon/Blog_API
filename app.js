const express = require("express");
const app = express();
const Post = require("./api/models/posts");
const postData = new Post();

app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use("/uploads", express.static("uploads"));

app.get("/api/posts", (req, res) => {
    res.status(200).send(postData.get());
})

app.get("/api/post/:post_id", (req, res) =>{
    const foundPost = postData.getIndividualBlog(req.params["post_id"]);
    if (foundPost){
        res.status(200).send(foundPost);
    }else{
        res.status(404).send("Not found id " + req.params.post_id);
    }
});

app.listen(3000, ()=>console.log("Listening on http://localhost:3000"));