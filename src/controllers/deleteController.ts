import { NextFunction, Request, Response } from 'express'
import PageModel from '../db/db'
import { errorHandler } from '../utils/errorHandler';

export const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
    
    //need to delete the specific page document with the pageid

    const pageId = req.params.id;
    
    try {
        const existingPage = await PageModel.findById(pageId);
    
        if (!existingPage) {
            // res.status(422).json({msg : "No existing page found by that pageId"});
            return next(errorHandler("No existing page found by that pageId", 422));
        }

        await PageModel.findByIdAndDelete(pageId);
        res.status(200).json({msg: "successfully deleted."});

    } catch (error) {
        next(error);
    }

}