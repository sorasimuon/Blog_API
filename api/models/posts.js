const PATH="./data.json";
const fs = require("fs");

class Post{

    get(){
        return this.readData();
    }

    getIndividualBlog(id){
        // Get One Blog Post
        let content = this.readData();
        const foundPost = content.find((post) => post.id == id);
        return foundPost;
    }

    add(newPost){
        // add new post
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData(){
        let content_data = fs.readFileSync("data.json")
        let post = JSON.parse(content_data);
        return post;
    }

    storeData(rawData){
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}
module.exports=Post;