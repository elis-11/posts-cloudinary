import { Router } from "express";
const commentRouter = Router();
import { checkAuth } from "../utils/checkAuth.js";
import { createComment } from "../controllers/CommentsController.js";

// Create Comment
// http://localhost:5000/api/comment/:id
commentRouter.post("/:id", checkAuth, createComment);

export default commentRouter;
