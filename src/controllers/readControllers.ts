import { NextFunction, Request, Response } from "express"
import  PageModel  from '../db/db'
import { errorHandler } from "../utils/errorHandler";


export const readAll = async (req: Request, res: Response, next:NextFunction) => {
    //needs to read the titles from all the existing pages in the database and send it

    try {
        const pages = await PageModel.find({});
        res.status(200).json(pages);

    }
    catch (error) {
        next(error);
    }
}


export const readOne = async (req: Request, res: Response, next:NextFunction) => {
    //needs to extract and send the whole page by taking the id param in the request
    const pageId = req.params.id;
    
    
    try {
        // const existingPage = await PageModel.findOne({title: title});
        const existingPage = await PageModel.findById(pageId);

        if (!existingPage) {
            // res.status(422).json({msg : "No existing page found by that pageId"})
            return next(errorHandler("No existing page found by that pageId", 422));
        }
    
        const page = await PageModel.findById(pageId);
        res.status(200).json(page)
    }
    catch (error) {
        next(error);
    }
}