import { Router } from "express";
import { register, login, getMe, getAll } from "../controllers/AuthController.js";
import { checkAuth } from "../utils/checkAuth.js";
// const router = new Router();
const authRouter = Router();

// Register
// http://localhost:5000/api/auth/register
// (`${API_URL}/api/auth/register`)
// router.post('/register', register)
authRouter.post('/register', register)

//Login
// http://localhost:5000/api/auth/login
authRouter.post("/login", login);

// Me
// http://localhost:5000/api/auth/me
authRouter.get("/me", checkAuth, getMe);

// all users
// http://loccalhost:5000/api/auth
authRouter.get("/", getAll)

export default authRouter;
// export default router;

