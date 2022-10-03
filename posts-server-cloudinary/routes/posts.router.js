import { Router } from "express";
import { createPost, getAll, getById, getMyPosts, removePost, updatePost, getPostComments  } from "../controllers/PostsController.js";
import { checkAuth } from "../utils/checkAuth.js";
const postRouter = Router();

// Create Post
// http://localhost:5000/api/posts
postRouter.post('/', checkAuth, createPost)

// Get All Posts
// http://localhost:5000/api/posts
postRouter.get('/', getAll)

// Get Post By Id
// http://localhost:5000/api/posts/:id
postRouter.get('/:id', getById)

// Get My Posts
// http://localhost:5000/api/posts/user/me
postRouter.get('/user/me', checkAuth, getMyPosts)

// Remove Post
// http://localhost:5000/api/posts/:id
postRouter.delete('/:id', checkAuth, removePost)

// Update Post
// http://localhost:5000/api/posts/:id
postRouter.put('/:id', checkAuth, updatePost)

// Get Post Comments
// http://localhost:5000/api/posts/comments/:id
postRouter.get('/comments/:id', getPostComments)



export default postRouter;
