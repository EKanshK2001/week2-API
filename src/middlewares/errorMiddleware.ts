import { Request, Response, NextFunction } from 'express'

interface CustomError extends Error {
    statusCode: number;
}

export const errorMiddleware = (err: CustomError, req: Request, res: Response, next: NextFunction) => {          //needs err arg first and next arg last
    // console.log(err);
    if (!err.statusCode) err.statusCode = 500;
    
    res.status(err.statusCode).json({msg: err.message, statusCode: err.statusCode});
}
