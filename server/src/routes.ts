import { Router } from "express";
import { UserController } from "./controllers/userController";


const router: Router = Router();

const userController: UserController = new UserController();

router.post("/users/register", (req, res) => userController.register(req, res));

export default router;