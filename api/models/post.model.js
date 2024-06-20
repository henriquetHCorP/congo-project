import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String, 
            required: true, 
        }, 
        content: {
           type: String, 
           required: true, 
        }, 
        title: {
            type: String, 
            required: true, 
            unique: true, 
        }, 
        image: {
            type: String, 
            default:"https://blog.berocket.com/wp-content/uploads/2020/09/97001ed5f3bc56eaefc1152c604184a6.png"
            // default: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png"
        },
        // likes: {
        //     type: Array, 
        //     default:[], 
        // }
        category: {
            type: String, 
            default: 'uncategorized', 
        },
        slug: {
            type: String, 
            required: true, 
            unique: true,
        }, 
    }, { timestamps: true}
); 

const Post = mongoose.model('Post', postSchema);

    export default Post; 