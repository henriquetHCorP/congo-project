import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js"

export const create = async(req, res, next) => {
    // console.log(req.user); 
    if(!req.user.isAdmin){
        return next(errorHandler(403, 'You are not allowed to create a post'))
    }
    if(!req.body.title || !req.body.content) {
        return next(errorHandler(400, 'Please provide all required fields'))
    }
    const slug = req.body.title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g,'');
    // above here we replace everything that's is not letter or number with a dash
    const newPost = new Post({
        ...req.body, 
        slug, 
        userId: req.user.id
    }); 

    try {
        const savedPost = await newPost.save(); 
        res.status(201).json(savedPost); 
        //201 means something was created; 
    }catch(error){
        next(error)
    }
}
 export const getposts = async(req, res, next) => {
    try {
        const startIndex = parseInt(req.query.startIndex) || 0; 
        const limit = parseInt(req.query.limit) || 9; 
        const sortDirection = req.query.order === 'asc'? 1 : -1;
        const posts = await Post.find({
            // if the query include userId, search for the userId, 
            ...(req.query.userId && {userId: req.query.userId}),
            // if the query include category, search for the category 
            ...(req.query.category && {category: req.query.category}), 
            //if the query include slug, search for the slug
            ...(req.query.slug && {slug: req.query.slug}), 
            // if the query include postId , search for _id because posts are saved inside mongodb under _id(s)
            ...(req.query.postId && {_id: req.query.postId}),
            ...(req.query.searchTerm && {
                $or : [
                    {title: {$regex: req.query.searchTerm, $options:'i'}},
                    {content: {$regex: req.query.searchTerm, $options: 'i'} }, 
                ],
            }),
    })
        .sort({updatedAt: sortDirection})
        .skip(startIndex)
        .limit(limit);

        const totalPosts = await Post.countDocuments(); 

        const now = new Date();

        // const oneMonthAgo = new Date(
        //     now.getFullYear(), 
        //     now.getMonth()-1,
        //     now.getDate() 
        // ); 

        const currentMonth = new Date(
            now.getFullYear(), 
            now.getMonth(),
            now.getDate() 
        ); 

        const currentMonthPosts = await Post.countDocuments({
              createdAt: {$gte: currentMonth},
        }); 
        
        // const lastMonthPosts = await Post.countDocuments({
        //     createdAt: {$gte: oneMonthAgo}, 
        // }); 
        // const lastMonthPosts = await Post.countDocuments({
        //     createdAt: {$gte:oneMonthAgo}, 
        // }); 

        res.status(200).json({
            posts,
            totalPosts, 
            currentMonthPosts, 
        })

    }catch(error) {
    }
 }
export const deletepost = async(req, res, next) => {
      if(!req.user.isAdmin || req.user.id !== req.params.userId) {
        return next(errorHandler(403,'You are not allowed to delete this post')); 
      }
      try {
        await Post.findByIdAndDelete(req.params.postId);
        res.status(200).json('The post has been deleted'); 
      } catch (error) {
        next(error); 
      }
};

export const updatepost = async (req, res, next) => {
    //if the user is  not a admin or if the user is not the owner of the post
    // the user inside the params is the owner of the post===>req.params.userId
    // user inside the token is the user who signed in ==> req.user.id
   if(!req.user.isAdmin || req.user.id !== req.params.userId){
      return next(errorHandler(403, 'You are not allowed to update this post')); 
   }
     try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.postId,
            {
                $set: {
                    title: req.body.title, 
                    content: req.body.content, 
                    category: req.body.category, 
                    image: req.body.image, 
                } 
            }, { new: true})
            res.status(200).json(updatedPost); 
     }catch(error){
            next(error); 
     }
}