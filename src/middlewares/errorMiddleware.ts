import { Request, Response, NextFunction } from 'express'

interface CustomError extends Error {
    statusCode: number;
}

export const errorMiddleware = (err: CustomError, req: Request, res: Response, next: NextFunction) => {          //needs err arg first and next arg last
    console.log(err);
    res.status(500).json({ msg: "something went wrong" });
}
