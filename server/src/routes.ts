import { Request, Response, Router } from "express";
import { UserController } from "./controllers/userController";
import { ProductController } from "./controllers/productController";
import { handleTokenBasedAuthentication } from "./middlewares/authMiddleware";
import cookieParser from 'cookie-parser';


const router: Router = Router();

router.use(cookieParser())

const productController: ProductController = new ProductController();
router.get("/products/getAll", (req: Request, res: Response) => productController.getProducts(req, res));

const userController: UserController = new UserController();
router.post("/user/register", (req: Request, res: Response) => userController.register(req, res));
router.post("/user/login", (req: Request, res: Response) => userController.logIn(req, res));

router.use(handleTokenBasedAuthentication)
router.post("/user/getUserData", (req: Request, res: Response) => userController.getUserData(req, res))


export default router;