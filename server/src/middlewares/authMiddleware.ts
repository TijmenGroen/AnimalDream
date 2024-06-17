import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { CustomJwtToken } from "../types/jwt";

export function handleTokenBasedAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
): NextFunction | void {
    const authenticationToken: string | undefined = req.headers["authorization"];

    if (!authenticationToken) {
        res.status(401).send("Unauthorized");

        return;
    }

    let jwtToken: CustomJwtToken | undefined;
    try {
        jwtToken = jwt.verify(
            authenticationToken,
            (process.env.JWT_SECRET_KEY as string)
        ) as CustomJwtToken;
    }
    catch {
        // Do nothing
    }

    if (!jwtToken) {
        res.status(401).send("Unauthorized");

        return;
    }
    return next();
}
