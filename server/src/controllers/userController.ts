import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserController {
    public register(req: Request, res: Response): void {
        console.log(req.body)
        res.status(204).json({message: "thihi"});
    }
}