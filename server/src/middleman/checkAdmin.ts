import { NextFunction, Request, Response } from "express";

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  // logic to verify user 
  const user = { role: "admin" };

  if (user.role === "admin") return next();

  return res
    .status(401)
    .json({ success: false, message: "un-authorised user", data: null });
};
