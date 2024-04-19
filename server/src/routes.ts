import { Request, Response, Router } from "express";
import { UserController } from "./controllers/userController";


const router: Router = Router();

const userController: UserController = new UserController();

router.post("/users/register", (req: Request, res: Response) => userController.register(req, res));

export default router;