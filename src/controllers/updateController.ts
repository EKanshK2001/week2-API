import { Request, Response, NextFunction } from 'express'
import PageModel from '../db/db'
import { errorHandler } from '../utils/errorHandler';

export const updateOne = async (req: Request, res: Response, next:NextFunction) => {
    //need to update the whole page object whenever called
    //extract the body from req.body and update to db

    const pageId = req.params.id;
    const { title, quote, disclaimer, content } = req.body;

    
    try {
        const existingPage = await PageModel.findById(pageId);

        if (!existingPage) {
            // res.status(422).json({msg : "No existing page found by that pageId"});
            return next(errorHandler("No existing page found by that pageId", 422));
        }

    
        //here replace is also a good option
        //await PageModel.findOneAndReplace({_id: id}, updatedPage)
        await PageModel.findOneAndUpdate({_id: pageId}, {$set: {title, quote, disclaimer, content}}, {new: true});
        res.status(200).json({msg: "updated successfully"});

    } catch (error) {
        next(error);
    }
}