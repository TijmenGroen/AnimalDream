import { Request, Response, Router } from "express";
import { UserController } from "./controllers/userController";
import { ProductController } from "./controllers/productController";


const router: Router = Router();

const productController: ProductController = new ProductController();
router.get("/products/getAll", (req: Request, res: Response) => productController.getProducts(req, res));

const userController: UserController = new UserController();
router.post("/users/register", (req: Request, res: Response) => userController.register(req, res));

export default router;