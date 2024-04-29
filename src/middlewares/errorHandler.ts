import { Request, Response, NextFunction } from 'express'


export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {          //needs err arg first and next arg last
    console.log(err);
    res.status(500).json({ msg: "something went wrong, maybe db connection" });
}
